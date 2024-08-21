import styled from "styled-components";

export const Container = styled.button`
  display: block;
  padding: 1.2rem;
  width: 100%;
  border-radius: .5rem;
  border: none;
  background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO100};
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO200};
  }
  &:disabled {
    background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO400};
  }
`;