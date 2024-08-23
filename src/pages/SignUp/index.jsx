import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import ExplorerLogo from "../../assets/explorer-logo.svg";

export function SignUp() {
  
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
        {isDesktop && <h2>Crie sua conta</h2>}
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
        <Button>
          Criar conta
        </Button>
        <a href="">
          Já tenho uma conta
        </a>
      </form>
 
    </Container>
  );
}