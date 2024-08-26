import Edit from "../../assets/svg/edit.svg";
import Favorite from "../../assets/svg/favorite.svg";
import NotFavorite from "../../assets/svg/not-favorite.svg";
import torrada from "../../assets/torrada.png";
import { Button } from "../Button";
import { Counter } from "../Counter";
import { useState } from "react";
import { Container, Footer, Image, Title, Price, TopCornerButton, Description } from "./styles";

import {useMediaQuery} from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";

export function Card({user, data}) {

  const isDesktop = useMediaQuery({
    minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)
  });

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container>
      <Image src={torrada} alt="Torrada de parma" />

      <Title>
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
              isFavorite ? <img src={NotFavorite}/> : <img src={Favorite}/>
            }
          </TopCornerButton>
        ) : (
          <TopCornerButton>
            <img src={Edit}/>
          </TopCornerButton>
        )
      }
    </Container>
  );
}