import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 21rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK200};
  border-radius:  .8rem;
  margin: 2rem;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    > button {
      padding-block: .4rem;
    }
  }
`;

export const Image = styled.img`
  width: 8.8rem;
  height: 8.8rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const Price = styled.span`
  font-size: 1.6rem;
  color: ${({theme}) => theme.COLORS.TINTS.CAKE200}
`;

export const FavoriteButton = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  background-color: inherit;
  border: none;
  cursor: pointer;
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    font-size: 2.4rem;
    transform: filter .2s;
  }
  > svg:hover {
    filter: brightness(.5);
  }
`;