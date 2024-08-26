import { Input } from "../Input";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { RiMenuFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive"; 
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import { Container, Menu, Logo, Orders, LogOutButton, StyledLogo } from "./styles";



export function Header({onOpenMenu, user}) {
  const role = user.role;
  const isDesktop = useMediaQuery({minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)})
  return (
    <Container>
      <div>
        
        {
          !isDesktop &&
          <Menu onClick={onOpenMenu}>
            <RiMenuFill/>
          </Menu>
        }
        <Logo data-role={role}>
          <div>
            <StyledLogo/>
            <h1>food explorer</h1>
          </div>
          {
            role === "admin" && <span>admin</span>
          }
        </Logo>
        {
          isDesktop &&
          <div className="search-bar">
            <Input 
              icon={RiSearchLine}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </div>
        }
        {
          role != "admin" && ( 
          !isDesktop ? (
            <Orders>
              <PiReceipt />
              <span>0</span>
            </Orders>
          ) : (
            <Button className="btn">
              <PiReceipt />
              Pedidos
              <span>(0)</span>
            </Button>
          ))
        }
        {
          role == "admin" && ( 
            isDesktop && (
              <Button className="btn">
                Novo prato
              </Button>  
            )
          )
        }
        {
          isDesktop && 
          <LogOutButton>
            <FiLogOut/>
          </LogOutButton>
        }
      </div>
    </Container>
  )
}