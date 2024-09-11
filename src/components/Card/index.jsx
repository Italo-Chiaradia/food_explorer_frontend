import Edit from "../../assets/svg/edit.svg";
import Favorite from "../../assets/svg/favorite.svg";
import { Button } from "../Button";
import { Counter } from "../Counter";
import { useState } from "react";
import NotFavorite from "../../assets/svg/not-favorite.svg";
import { useMediaQuery } from "react-responsive";
import BREAKPOINTS, {formatDeviceBreakpoints} from "../../utils/deviceBreakpoints";
import { Container, Footer, Image, Title, Price, TopCornerButton, Description } from "./styles";

import {useAuth} from "../../hook/auth";
import {api} from "../../services/api.js";

export function Card({data}) {
  const {user} = useAuth();

  const isDesktop = useMediaQuery({
    minWidth: formatDeviceBreakpoints(BREAKPOINTS.sm)
  });

  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);

  const dishImg = `${api.defaults.baseURL}/files/${data.img}`;

  return (
    <Container>
      <Image src={dishImg} alt={data.title} />

      <Title to={`/details/${data.id}`}>
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
        {"R$ " + data.price.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
      </Price>

      {
        user.role !== "admin" && (
          <Footer>
            <Counter
              count={count}
              setCount={setCount}
            />
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
          <TopCornerButton to={`/update/${data.id}`}>
            <img src={Edit}/>
          </TopCornerButton>
        )
      }
    </Container>
  );
}