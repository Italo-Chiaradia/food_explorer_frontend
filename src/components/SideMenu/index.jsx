import { Container, NavButton, Content } from "./styles";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { RiSearchLine } from "react-icons/ri";
import CloseIcon from "../../assets/Close.svg";
export function SideMenu({menuIsOpen, onCloseMenu, user}) {
  const role = user.role;
  return (
    <Container data-is-menu-open={menuIsOpen}>
      <header>
        <div>
          <button onClick={onCloseMenu}>
            <img src={CloseIcon}/>
          </button>
          Menu
        </div>
      </header>
      <Content>
        <Input
          icon={RiSearchLine}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
        <nav>
          {
            role === "admin" && 
              <NavButton>
                Novo prato
              </NavButton>
          }
          <NavButton>
            Sair
          </NavButton>
            
        </nav>
      </Content>
      <Footer/>
    </Container>
  )
}