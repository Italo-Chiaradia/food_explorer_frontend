import { Container } from "./styles";
import { BsFillHexagonFill as Logo } from "react-icons/bs";
export function Footer() {
  return (
    <Container>
      <div>
        <div>
          <Logo/>food explorer
        </div>
        <div>
          © 2023 - Todos os direitos reservados
        </div> 
      </div>
    </Container>
  )
}