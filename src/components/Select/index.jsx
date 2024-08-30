import {Container, SelectContainer} from "./styles";
import DownArrow from "../../assets/svg/down-arrow.svg";
export function Select({title, ...rest}) {
  return (
    <Container>
      {title && <span>{title}</span>}
      <SelectContainer>
        <select {...rest}>
          <option value="refeição">Refeição</option>
          <option value="prato principal">Prato principal</option>
          <option value="bebida">Bebida</option>
        </select>
        <img src={DownArrow} />
      </SelectContainer>
    </Container>
  )
}