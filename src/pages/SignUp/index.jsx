import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import ExplorerLogo from "../../assets/explorer-logo.svg";

export function SignUp() {
  return (
    <Container>
      
      <header>
        <img src={ExplorerLogo}/>
        <h1>food explorer</h1>
      </header>
      <form>
        <div>
          <Input
            title="Seu nome"
            type="text"
            placeholder="Exemplo: Maria da Silva"
          />
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
            title="Criar conta"
          />
          <a href="">
            Já tenho uma conta
          </a>
        </div>
      </form>
 
    </Container>
  );
}