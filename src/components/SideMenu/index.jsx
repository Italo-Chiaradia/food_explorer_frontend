import { Footer } from "../Footer";
import { useAuth } from "../../hook/auth";
import { InputAuth } from "../InputAuth";
import { RiSearchLine } from "react-icons/ri";
import { Container, NavButton, Content, StyledClose } from "./styles";
import { useNavigate } from "react-router-dom";

export function SideMenu({isMenuOpen, onCloseMenu}) {
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/new");
  }
  const { signOut, user } = useAuth();

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
          <NavButton onClick={signOut}>
            Sair
          </NavButton>
            
        </nav>
      </Content>
      <Footer/>
    </Container>
  )
}