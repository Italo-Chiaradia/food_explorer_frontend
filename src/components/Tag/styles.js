import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({theme}) => theme.COLORS.DARK.DARK1000};
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  padding: .8rem;
  border-radius: .5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
`;