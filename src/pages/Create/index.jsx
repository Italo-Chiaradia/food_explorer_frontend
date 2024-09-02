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


export function Create() {
  const user = {role: "admin"}

  const [menu, setMenu] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
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
          <a href="">
            <img src={BackArrow}/>
            voltar
          </a>
          <h2>
            {!isDesktop ? "Novo prato" : "Adicionar prato"}
          </h2>
          <div className={!isDesktop ? "flexContainer" : "cols3"}>
            <Section title="Imagem do prato">
              <Input
                type="file"
                placeholder="Selecione imagem"
              />
            </Section>
            <Section title="Nome">
              <Input
                type="text"
                placeholder="Ex.: Salada Ceasar"
              />
            </Section>
            <Section title="Categoria">
              <Select/>
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
              <InputNumber/>
            </Section>
          </div> 
          <Section title="Descrição">
            <TextArea 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </Section>
          <Button disabled>
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