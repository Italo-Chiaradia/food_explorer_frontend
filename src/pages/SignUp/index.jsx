import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { InputAuth } from "../../components/InputAuth";
import ExplorerLogo from "../../assets/svg/explorer-logo.svg";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";

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
        <InputAuth
          title="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <InputAuth
          title="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <InputAuth
          title="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button>
          Criar conta
        </Button>
        <Link to={-1}>
          Já tenho uma conta
        </Link>
      </form>
 
    </Container>
  );
}