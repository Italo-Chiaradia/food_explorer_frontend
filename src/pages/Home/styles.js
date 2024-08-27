import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Content = styled.main`
  grid-area: content;
  overflow-y: auto;
`;

export const Banner = styled.div`
  max-width: 37.6rem;
  height: 12rem;
  margin-block: 6.2rem;
  margin-inline: auto;
  position: relative;
  border-radius: .3rem;
  background: ${({theme}) => theme.COLORS.GRADIENT.GRADIENT200};
  > img {
    max-width: 100%;
    height: auto;
    left: -3.3rem;
    bottom: 0;
    position: absolute;
  }
  > div {
    position: absolute;
    left: 45%;
    top: 3.6rem;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    > h2 {
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.4;
    }
    > p {
      font-family: "Popping", sans-serif;
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`