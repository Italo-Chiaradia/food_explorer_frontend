import { TagItem } from "../../components/TagItem/index.jsx";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import BackArrow from "../../assets/svg/back-arrow.svg";
import { TextArea } from "../../components/TextArea";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { InputNumber } from "../../components/InputNumber";
import { Container, ScrollContent, Content, TagContainer } from "./styles.js";

export function Create() {
  const user = {role: "admin"}
  const [menu, setMenu] = useState(false);
  const tags = ["Pão de naan"];
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
            Voltar
          </a>
          <h2>Novo prato</h2>
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
          <Section title="Ingredientes">
            <TagContainer>
              {
                tags && tags.map((tag, index) => {
                  return <TagItem  
                    key={String(index)}
                    value={tag}
                  />    
                })
              }
              <TagItem
                isNew
                placeholder="Adicionar"
              />
            </TagContainer>
          </Section>
          <Section title="Preço">
            <InputNumber/>
          </Section>
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