import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { TagItem } from "../../components/TagItem/index.jsx";
import BackArrow from "../../assets/svg/back-arrow.svg";
import { TextArea } from "../../components/TextArea";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { InputNumber } from "../../components/InputNumber";
import {useMediaQuery} from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints.js";
import { Container, ScrollContent, Content, TagContainer } from "./styles.js";

import {api} from "../../services/api.js";
import {useAuth} from "../../hook/auth";

export function Create() {
  const {user} = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("refeição");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [img, setImg] = useState("");

  const [menu, setMenu] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  

  const isDisabled = !img || !title || !category || !price || !description || !tags;

  function realToFloat(value) {
    // Remove "R$", pontos e converte vírgula em ponto
    const cleanValue = value.replace("R$", "").replace(/\./g, "").replace(",", ".");
    
    // Converte para float
    return parseFloat(cleanValue);
  }

  async function handleCreate(e) {
    e.preventDefault();
    const dish = {
      title,
      category,
      price: realToFloat(price),
      description,
      ingredients: tags
    };
    
    try {
      const {dish_id} = (await api.post("/dishes", dish)).data;
      const fileUploadForm = new FormData();
      fileUploadForm.append("img", img);  
      await api.patch(`/dishes/${dish_id}`, fileUploadForm);
      alert("Produto cadastrado com sucesso!");
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log(error);
        alert("Erro ao cadastrar o produto!");
      }
    }
    navigate("/");
  }
  function handleNewTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter(tag => tag != deleted));
  }

  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)});

  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        user={user}
      />
      <ScrollContent>
        <Content>
          <Link to="/">
            <img src={BackArrow}/>
            voltar
          </Link>
          <h2>
            {!isDesktop ? "Novo prato" : "Adicionar prato"}
          </h2>
          <div className={!isDesktop ? "flexContainer" : "cols3"}>
            <Section title="Imagem do prato">
              <Input
                type="file"
                placeholder={img.name || "Selecione imagem"}
                onChange={e => {
                  setImg(e.target.files[0]);
                  /* setImg(e.target.files[0].name) */
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
                onChange={e => setCategory(e.target.value)}
              />
            </Section>
          </div>
          <div className={!isDesktop ? "flexContainer" : "cols2"}>
            <Section title="Ingredientes">
              <TagContainer>
                {
                  tags.map((tag, index) => {
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
                onChange={(e) => {
                  setPrice(e.target.value)
                }}  
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
          <Button onClick={handleCreate} disabled={isDisabled}>
            Salvar alterações
          </Button>
        </Content>
        <Footer/>
      </ScrollContent>
      <SideMenu
        onCloseMenu={() => setMenu(false)}
        isMenuOpen={menu}
        user={user}
      />
    </Container>
  )
}