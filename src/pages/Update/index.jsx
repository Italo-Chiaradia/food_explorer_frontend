import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { TagItem } from "../../components/TagItem/index.jsx";
import BackArrow from "../../assets/svg/back-arrow.svg";
import { TextArea } from "../../components/TextArea";
import { SideMenu } from "../../components/SideMenu";
import { InputNumber } from "../../components/InputNumber";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, ScrollContent, Content, TagContainer } from "./styles.js";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints.js";
import {useMediaQuery} from "react-responsive";


import { api } from "../../services/api.js";
import { useAuth } from "../../hook/auth.jsx";
import { useEffect, useState } from "react";

export function Update() {
  const {user} = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({});
  
  function convertCurrencyToFloat(value) {
    // Remove the "R$" symbol and any spaces
    value = value.replace("R$", "").trim();
  
    // Replace dots (.) used as thousand separators
    value = value.replace(/\./g, "");
  
    // Replace commas (,) used as decimal separators with a dot
    value = value.replace(",", ".");
  
    // Convert to float
    return parseFloat(value);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, []);
 

  const [title, setTitle] = useState();
  let [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const [img, setImg] = useState("");
  const [tags, setTags] = useState();
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      setCategory(data.category || '');
      setPrice(data.price || '');
      setDescription(data.description || '');
      if (data.img) {
        setImg(data.img || null);
      }
      if (data.ingredients) {
        setTags(data.ingredients.map(i => i.name) || []); 
      }
    }
    
  }, [data]);
  
  async function handleDelete(e) {
    e.preventDefault();
    try {
      await api.delete(`/dishes/${params.id}`);
      alert(`${title} foi removido do menu`);
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
        alert(`Erro ao remover ${title} do menu!`);
      }
    }
    navigate("/");
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const dish = {
      title,
      category,
      price,
      description,
      ingredients: tags
    };
    try {
      const {dish_id} = (await api.put(`/dishes/${params.id}`, dish)).data;
      if (img !== data.img) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("img", img);  
        await api.patch(`/dishes/${dish_id}`, fileUploadForm);
      }
      alert(`${title} foi atualizado com sucesso!`);
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
        alert(`Erro ao atualizar ${title}!`);
      }
    }
    navigate("/");
  }

  function handleNewTag(e) {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter(tag => tag != deleted));
  }

  const isDisabled = !img || !title || !category || !price || !description || tags.length == 0;
  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)});
  
  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        search={setSearch}
      />
      <ScrollContent>
        <Content>
          <Link to={-1}>
            <img src={BackArrow}/>
            voltar
          </Link>
          <h2>
            Editar prato
          </h2>
          <div className={!isDesktop ? "flexContainer" : "cols3"}>
            <Section title="Imagem do prato">
              <Input
                type="file"
                placeholder={img.name || "Selecione imagem"}
                onChange={(event) => {
                  setImg(event.target.files[0]);
                }}
              />
            </Section>
            <Section title="Nome">
              <Input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Section>
            <Section title="Categoria">
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </Section>
          </div>
          <div className={!isDesktop ? "flexContainer" : "cols2"}>
            <Section title="Ingredientes">
              <TagContainer>
                {
                  tags && tags.map((tag, index) => {
                    return <TagItem  
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />    
                  })
                } 
                <TagItem
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleNewTag}
                />
              </TagContainer>
            </Section>
            <Section title="Preço">
              <InputNumber
                value={price}
                onChange={e => setPrice(convertCurrencyToFloat(e.target.value))}
              />
            </Section>
          </div> 
          <Section title="Descrição">
            <TextArea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Section>
          <div className="btn-container">
            <button onClick={handleDelete} className="btn-delete">
                Excluir prato
            </button>
            <Button onClick={handleUpdate} className="btn-save" disabled={isDisabled}>
              Salvar alterações
            </Button>
          </div>
        </Content>
        <Footer/>
      </ScrollContent>
      <SideMenu
        onCloseMenu={() => setMenu(false)}
        isMenuOpen={menu}
        search={setSearch}
      />
    </Container>
  )
}