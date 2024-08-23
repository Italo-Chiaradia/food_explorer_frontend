import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  > span {
    font-size: 2rem;
    font-weight: 700;
  }
  > button {
    display: flex;
    align-items: center;
    background-color: inherit;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    cursor:pointer;
    > svg {
      font-size: 2.4rem;
    }
    > svg:hover {
      filter: brightness(.5);
    }
  }
`;
