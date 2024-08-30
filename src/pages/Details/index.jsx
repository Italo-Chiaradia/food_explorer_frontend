import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { Container, ScrollContent, Content } from "./styles.js";
import BackArrow from "../../assets/svg/back-arrow.svg";
import Dish from "../../assets/torrada.png";


export function Details() {
  const user = {"role":"admin"}
  const [menu, setMenu] = useState(false);
  const tags = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"];
  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        user={user}
      />
      <ScrollContent>
        <Content>
          <a href="">
            <img src={BackArrow} />
            voltar
          </a>
          <img src={Dish} />
          <div>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="tags-container">
              {
                tags && tags.map((tag, index) => {
                  return <Tag 
                    key={String(index)}
                    title={tag}
                  />
                })
              }
            </div>
          </div>
          <Button>
            Editar prato
          </Button>
        </Content>
        <Footer/>
      </ScrollContent>
      <SideMenu
        isMenuOpen={menu}
        onCloseMenu={() => setMenu(false)}
        user={user}
      />
    </Container>
  )
}