import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";
export function Footer() {
  return (
    <Container>
      <div>
        <span><BsFillHexagonFill/>food explorer</span>
        <span>© 2023 - Todos os direitos reservados</span> 
      </div>
    </Container>
  )
}