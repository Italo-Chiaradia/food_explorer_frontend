import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import ExplorerLogo from "../../assets/explorer-logo.svg";

export function SignIn() {
  return (
    <Container>
      
      <header>
        <img src={ExplorerLogo}/>
        <h1>food explorer</h1>
      </header>
      <form>
        <div> 
          <Input
            title="Email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            title="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
          <Button
            /* disabled */
            title="Entrar"
          />
          <a href="">
            Criar uma conta
          </a>
        </div>
      </form>
 
    </Container>
  );
}