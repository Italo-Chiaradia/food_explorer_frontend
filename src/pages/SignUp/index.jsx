import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Container } from "./styles";
import { InputAuth } from "../../components/InputAuth";
import ExplorerLogo from "../../assets/svg/explorer-logo.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";


export function SignUp() {
  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.lg)});

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      })
  }

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
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <InputAuth
          title="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <InputAuth
          title="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button onClick={handleSignUp}>
          Criar conta
        </Button>
        <Link to={-1}>
          Já tenho uma conta
        </Link>
      </form>
 
    </Container>
  );
}