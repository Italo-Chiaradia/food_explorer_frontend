import { Button } from "../Button";
import { Counter } from "../Counter";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Container, Image, Title, Price, FavoriteButton } from "./styles";
import torrada from "../../assets/maracuja.png";

import {useState} from "react";

export function Card({data}) {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container>
      <Image src={torrada} alt="Torrada de parma" />

      <Title>
        {data.title + " >"}
      </Title>
      <Price>
        {"R$ " + data.price}
      </Price>

      <div>
        <Counter/>
        <Button>
          incluir
        </Button>
      </div>
      
      <FavoriteButton onClick={() => setIsFavorite(prevState => !prevState)}>
        {
          isFavorite ? <FaHeart /> : <FaRegHeart /> 
        }
      </FavoriteButton>
    </Container>
  );
}