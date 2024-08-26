import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  > span {
    font-size: 1.6rem;
  }
  > button {
    display: flex;
    align-items: center;
    background-color: inherit;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    cursor:pointer;
    
    > img {
      width: 1.8rem;
      height: 1.8rem;
      transition: filter .2s
    }
  }
  > button:hover img {
    filter: brightness(.5);
  }
`;
