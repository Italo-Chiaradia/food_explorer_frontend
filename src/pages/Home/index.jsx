import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { Category } from "../../components/Category";
import { SideMenu } from "../../components/SideMenu";
import { useState } from "react";
import { Container, Content, Banner } from "./styles";

import dishes from "./dishes.json";

export function Home() {
  const user = {role: "costumer"}
  const dishesArray = dishes.DISHES;
  const [menu, setMenu] = useState(false);
  return(
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        user={user}
      />
      <Content>
        <Banner>
          <img src={BannerImg} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>
        <Category 
          title="Refeições"
          dishes={dishesArray}
          user={user}
        />
        <Category 
          title="Refeições"
          dishes={dishesArray}
          user={user}
        />
        <Category 
          title="Refeições"
          dishes={dishesArray}
          user={user}
        />
      </Content>
      <Footer/>
      <SideMenu
        onCloseMenu={() => setMenu(false)}
        isMenuOpen={menu}
        user={user}
      />
    </Container>
  )
}