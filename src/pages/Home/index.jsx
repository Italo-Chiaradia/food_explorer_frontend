import dishes from "./dishes.json";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { Category } from "../../components/Category";
import { SideMenu } from "../../components/SideMenu";
import { useState } from "react";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
import BannerImgDesktop from "../../assets/banner-desktop.png";
import { Container, Content, Banner, ScrollContent } from "./styles";

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
      <ScrollContent>
        <Content>
          <Banner>
            <picture>
              <source media={`(min-width: ${BREAKPOINTS.xs})`} srcSet={BannerImgDesktop}/>
              
              <img src={BannerImg}/>
            </picture>

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
            title="Pratos principais"
            dishes={dishesArray}
            user={user}
          />
          <Category 
            title="Bebidas"
            dishes={dishesArray}
            user={user}
          />
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