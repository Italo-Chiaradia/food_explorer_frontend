import Dish from "../../assets/torrada.png";
import { Tag } from "../../components/Tag";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import BackArrow from "../../assets/svg/back-arrow.svg";
import { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import { PiReceipt } from "react-icons/pi";
import { Container, ScrollContent, Content } from "./styles.js";
import { useMediaQuery } from "react-responsive"; 
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import { useNavigate } from "react-router-dom";
export function Details() {
  const navigate = useNavigate();

  function handleUpdate() {
    navigate("/update");
  }

  const user = {"role":"admin"}
  const tags = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"];

  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.md)});
  const [menu, setMenu] = useState(false);
  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
        user={user}
      />
      <ScrollContent>
        <Content>
          <div className="dish-image">  
            <Link to={-1}>
              <img src={BackArrow} />
              voltar
            </Link>
            <img src={Dish} />
          </div>

          <div className="dish-content">
            <div className="dish-info">
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
            <div className="dish-count">
              {
                user.role === "admin" ? (
                  <Button onClick={() => handleUpdate()}>
                    Editar prato
                  </Button>
                ) : (
                  <>
                    <Counter/>
                    <Button className="order-btn">
                      {
                        !isDesktop ? (
                          <>
                            <PiReceipt/>
                            pedir • 
                          </>
                        ) : (
                          <span>incluir • </span>
                        )
                      }
                      <span>R$ 25,00</span>
                    </Button>
                  </>
                )
              }
            </div>
          </div>
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