import { Button } from "../Button";
import { Counter } from "../Counter";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Container, Image, Title, Price, LikeButton } from "./styles";
import torrada from "../../assets/torrada.png";

export function Card({data}) {
  return (
    <Container>
      <Image src={torrada} alt="Torrada de parma" />

      <Title>{data.title}</Title>
      <Price>{data.price}</Price>

      <div>
        <Counter/>
        <Button>
          incluir
        </Button>
      </div>
      
      <LikeButton>
        <FaRegHeart />
        <FaHeart />
      </LikeButton>
    </Container>
  );
}