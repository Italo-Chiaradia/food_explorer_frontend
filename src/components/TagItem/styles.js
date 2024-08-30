import styled from "styled-components";

export const Container = styled.div`
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${({theme, isNew}) => isNew ? "1px dashed gray" : "transparent"};
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT.LIGHT600};
  > input {
    width: 100%;
    border: 1px solid;
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT.LIGHT600 : theme.COLORS.LIGHT.LIGHT100};
  }
  > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT.LIGHT600 : theme.COLORS.LIGHT.LIGHT100};
    }
  }
`;