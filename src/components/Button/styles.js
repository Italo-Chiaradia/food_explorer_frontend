import styled from "styled-components";

export const Container = styled.button`
  display: block;
  padding: 1.2rem;
  width: 100%;
  border-radius: .5rem;
  border: .1rem solid transparent;
  background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO100};
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  cursor: pointer;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    font-size: 3.2rem;
    margin-right: .8rem;
  }
  > span {
    margin-left: .4rem;
  }
  &:hover {
    background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO200};
  }
  &:disabled {
    background-color: ${({theme}) => theme.COLORS.TINTS.TOMATO400};
  }
  &:focus {
    border: .1rem solid ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  }
  
`;