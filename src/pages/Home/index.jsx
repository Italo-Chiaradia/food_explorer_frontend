import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { Slider } from "../../components/Slider";
import { SideMenu } from "../../components/SideMenu";
import { useState, useEffect } from "react";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
import BannerImgDesktop from "../../assets/banner-desktop.png";
import { Container, Content, Banner, ScrollContent } from "./styles";

import {api} from "../../services/api";
import {useAuth} from "../../hook/auth";
export function Home() {
  const {user} = useAuth();
  
  const [menu, setMenu] = useState(false);
  
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      
      setDishes(response.data);
    }
    fetchDishes();
  }, [search]); 

  return(
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        search={setSearch}
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
          {
            dishes.filter(dish => dish.category === "refeição").length > 0 && (
              <>
                <h2>Refeições</h2>
                <Slider
                  dishes={dishes.filter(dish => dish.category === "refeição")}
                />
              </>
            )
          }
          {
            dishes.filter(dish => dish.category === "sobremesa").length > 0 && (
              <>
                <h2>Sobremesas</h2>
                <Slider
                  dishes={dishes.filter(dish => dish.category === "sobremesa")}
                />
              </>
            )
          }
          {
            dishes.filter(dish => dish.category === "bebida").length > 0 && (
              <>
                <h2>Bebidas</h2>
                <Slider
                  dishes={dishes.filter(dish => dish.category === "bebida")}
                />
              </>
            )
          }
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