import { api } from "../../services/api";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { useAuth } from "../../hook/auth.jsx";
import BackArrow from "../../assets/svg/back-arrow.svg";
import { SideMenu } from "../../components/SideMenu";
import { PiReceipt } from "react-icons/pi";
import { useMediaQuery } from "react-responsive"; 
import { useEffect,useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, ScrollContent, Content } from "./styles.js";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";

export function Details() {
  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.md)});
  const navigate = useNavigate();
  const params = useParams();
  const {user} = useAuth();
  
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  function formatToCurrency(value) {
    // Garantir que o valor é um número
    if (isNaN(value)) {
      throw new Error("O valor deve ser um número.");
    }
  
    // Definir as opções de formatação
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };
  
    // Formatar o número como moeda brasileira
    return new Intl.NumberFormat('pt-BR', options).format(value);
  }

  function handleUpdate() {
    navigate(`/update/${data.id}`);
  }
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDish()
  }, []);

  const dishImg = data.img ? `${api.defaults.baseURL}/files/${data.img}` : "";

  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenu(true)}
      />
      <ScrollContent>
        <Content>
          <div className="dish-image">  
            <Link to={-1}>
              <img src={BackArrow} />
              voltar
            </Link>
            <img src={dishImg} />
          </div>

          <div className="dish-content">
            <div className="dish-info">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="tags-container">
               {
                  data.ingredients && data.ingredients.map((ingredient, index) => {
                    return <Tag 
                      key={String(index)}
                      title={ingredient.name}
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
                    <Counter
                      count={count}
                      setCount={setCount}
                    />
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
                      <span>{formatToCurrency(count * data.price)}</span>
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
      />
    </Container>
  )
}