import Edit from "../../assets/svg/edit.svg";
import Favorite from "../../assets/svg/favorite.svg";
import maracuja from "../../assets/maracuja.png";
import NotFavorite from "../../assets/svg/not-favorite.svg";
import { Button } from "../Button";
import { Counter } from "../Counter";
import { useState } from "react";
import { Container, Image, Title, Price, TopCornerButton } from "./styles";

export function Card({user, data}) {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container>
      <Image src={maracuja} alt="Torrada de parma" />

      <Title>
        {data.title + " >"}
      </Title>
      <Price>
        {"R$ " + data.price}
      </Price>

      {
        user.role !== "admin" && (
          <div>
            <Counter/>
            <Button>
              incluir
            </Button>
          </div>
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