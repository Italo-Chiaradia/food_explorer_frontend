import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, { formatDeviceBreakpoints } from "../../utils/deviceBreakpoints";
import ExplorerLogo from "../../assets/explorer-logo.svg";

export function SignIn() {
  const isDesktop = useMediaQuery(
    {
      minWidth: formatDeviceBreakpoints(BREAKPOINTS.lg)
    }
  );
  return (
    <Container>
      
      <header>
        <img src={ExplorerLogo}/>
        <h1>food explorer</h1>
      </header>
      <form>
        {isDesktop && <h2>Faça login</h2>}
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
        <Button>
          Entrar
        </Button>
        <a href="">
          Criar uma conta
        </a>
 
      </form>
 
    </Container>
  );
}