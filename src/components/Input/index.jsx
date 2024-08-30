import {Container, InputField} from "./styles";
import Upload from "../../assets/svg/upload.svg";
export function Input({icon: Icon, title, type, ...rest}) {
  return (
    <Container>
      {Icon && <Icon/>}
      
      {
        type === "file" ? ( 
          <>
            <img src={Upload}/>
            <span>Selecione uma imagem</span>
            <InputField type="file" {...rest}/>
          </>
        ) : (
          <InputField type={type} {...rest}/>
        )
      }
      
    </Container>
  );
}