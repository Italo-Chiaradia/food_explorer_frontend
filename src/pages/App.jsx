import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SideMenu} from "../components/SideMenu";
import styled from "styled-components";
const Container = styled.div``;
import {useState} from "react";
import {Card} from "../components/Card";
export function App() {
  const [menu, setMenu] = useState(true);
  const user = {role: "common"};
  return (
    <Container>
      {/* <Card data={{
      title:"asdfasdf",
      description: "asdfasdf",
      price: "15"
    }}/> */}
    </Container>
  )
}