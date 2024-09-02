import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { InputAuth } from "../InputAuth";
import { RiMenuFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive"; 
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import { Container, Menu, Logo, Orders, LogOutButton, StyledLogo } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header({onOpenMenu, user}) {
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/new");
  }

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
        <Logo data-role={role} to="/">
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
            <InputAuth 
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
              <Button className="btn" onClick={() => handleCreate()}>
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