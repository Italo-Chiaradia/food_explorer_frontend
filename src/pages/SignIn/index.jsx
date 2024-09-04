import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { InputAuth } from "../../components/InputAuth";
import ExplorerLogo from "../../assets/svg/explorer-logo.svg";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, { formatDeviceBreakpoints } from "../../utils/deviceBreakpoints";

import { useAuth } from "../../hook/auth";
import { useState } from "react";

export function SignIn() {
  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.lg)});
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    signIn({email, password});
  }
  return (
    <Container>
      <header>
        <img src={ExplorerLogo}/>
        <h1>food explorer</h1>
      </header>

      <form>
        {isDesktop && <h2>Faça login</h2>}
        <InputAuth
          title="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <InputAuth
          title="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
        />
        <Button onClick={handleSignIn}>
          Entrar
        </Button>
        <Link to="/register">
          Criar uma conta
        </Link>
      </form>
    </Container>
  );
}