import { Container, Menu, Logo, Orders } from "./styles";

import { PiReceipt } from "react-icons/pi";
import { RiMenuFill } from "react-icons/ri";
import { BsFillHexagonFill } from "react-icons/bs";

export function Header({onOpenMenu, user}) {
  const role = user.role;
  
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <RiMenuFill/>
      </Menu>
      <Logo data-role={role}>
        <BsFillHexagonFill /> 
        <h1>food explorer</h1>
        {
          role === "admin" && <span>admin</span>
        }
      </Logo>
      {
        role != "admin" && 
        <Orders>
          <PiReceipt/> 
          <span>0</span>
        </Orders>
      }
    </Container>
  )
}