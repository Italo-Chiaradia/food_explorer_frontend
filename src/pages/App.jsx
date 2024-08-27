import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SideMenu} from "../components/SideMenu";
import styled from "styled-components";
const Container = styled.div``;
import {useState} from "react";
import {Card} from "../components/Card";

export function App() {
  const [menu, setMenu] = useState(true);
  const user = {role: "costumer"};
  return (
    <Container>
      <Card user={{role: "admin"}} data={{
        img:{},
        title:"Torradas de Parma",
        description: "Presunto de parma e rúcula em um pão com fermentação natural.",
        price: "25,97"
      }}/>
    </Container>
  )
}