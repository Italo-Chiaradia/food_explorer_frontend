import {Container} from "./styles";

export function Input({icon: Icon, title, ...rest}) {
  return (
    <Container>
      {
        title && <span>{title}</span> 
      }
      <div>
        {Icon && <Icon/>}
        <input {...rest}/>
      </div>
    </Container>
  );
}