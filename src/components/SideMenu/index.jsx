import { Footer } from "../Footer";
import { InputAuth } from "../InputAuth";
import { RiSearchLine } from "react-icons/ri";
import { Container, NavButton, Content, StyledClose } from "./styles";
import { useNavigate } from "react-router-dom";
export function SideMenu({isMenuOpen, onCloseMenu, user}) {
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/new");
  }

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
              <NavButton onClick={() => handleCreate()}>
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