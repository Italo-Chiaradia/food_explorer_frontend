import Edit from "../../assets/svg/edit.svg";
import Favorite from "../../assets/svg/favorite.svg";
import { Button } from "../Button";
import { Counter } from "../Counter";
import { useState } from "react";
import NotFavorite from "../../assets/svg/not-favorite.svg";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import { Container, Footer, Image, Title, Price, TopCornerButton, Description } from "./styles";

import torrada from "../../assets/torrada.png";

export function Card({user, data}) {

  const isDesktop = useMediaQuery({
    minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)
  });

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container>
      <Image src={torrada} alt="Torrada de parma" />

      <Title to="/details">
        {data.title + " >"}
      </Title>
      {
        isDesktop && (
          <Description>
            {data.description}
          </Description>
        )
      }
      <Price>
        {"R$ " + data.price}
      </Price>

      {
        user.role !== "admin" && (
          <Footer>
            <Counter/>
            <Button>
              incluir
            </Button>
          </Footer>
        )
      }
      
      {
        user.role !== "admin" ? (
          <TopCornerButton onClick={() => setIsFavorite(prevState => !prevState)}>
            {
              !isFavorite ? <img src={NotFavorite}/> : <img src={Favorite}/>
            }
          </TopCornerButton>
        ) : (
          <TopCornerButton to="/update">
            <img src={Edit}/>
          </TopCornerButton>
        )
      }
    </Container>
  );
}