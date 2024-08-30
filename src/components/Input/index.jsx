import {Container, InputField} from "./styles";
import Upload from "../../assets/svg/upload.svg";
export function Input({icon: Icon, placeholder, type, ...rest}) {
  return (
    <Container>
      {Icon && <Icon/>}
      
      {
        type === "file" ? ( 
          <>
            <img src={Upload}/>
            <span>{placeholder}</span>
            <InputField type="file" {...rest}/>
          </>
        ) : (
          <InputField placeholder={placeholder} type={type} {...rest}/>
        )
      }
      
    </Container>
  );
}