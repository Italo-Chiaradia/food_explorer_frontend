import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import ExplorerLogo from "../../assets/explorer-logo.svg";

export function SignIn() {
  return (
    <Container>
      
      <form>
        <header>
          <img src={ExplorerLogo}/>
          <h1>food explorer</h1>
        </header>
        <Input
          title="Email"
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button
          title="Entrar"
        />
        <a>
          Criar uma conta
        </a>
      </form>
 
    </Container>
  );
}