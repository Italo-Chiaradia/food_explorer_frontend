import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  border-radius: .8rem;
  padding: 1.4rem;
  font-size: 1.6rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK800};
  border: 1px solid transparent;
  color: #fff;
  resize: none;

  &:focus {
    border: 1px solid #fff;
  }
`;