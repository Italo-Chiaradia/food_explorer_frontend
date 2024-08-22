import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SideMenu} from "../components/SideMenu";
import styled from "styled-components";
const Container = styled.div``;
import {useState} from "react";

export function App() {
  const [menu, setMenu] = useState(false);
  const user = {role: "costumer"};
  return (
    <Container>
      <Header user={user} onOpenMenu={() => setMenu(true)}/>
      <SideMenu user={user} menuIsOpen={menu} onCloseMenu={() => setMenu(false)}/>

    </Container>
  )
}