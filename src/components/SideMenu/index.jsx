import { Container, NavButton, Content, StyledClose } from "./styles";
import { InputAuth } from "../InputAuth";
import { Footer } from "../Footer";
import { RiSearchLine } from "react-icons/ri";
export function SideMenu({isMenuOpen, onCloseMenu, user}) {
  const role = user.role;
  return (
    <Container data-is-menu-open={isMenuOpen}>
      <header>
        <div>
          <button onClick={onCloseMenu}>
            <StyledClose/>
          </button>
          Menu
        </div>
      </header>
      <Content>
        <InputAuth
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