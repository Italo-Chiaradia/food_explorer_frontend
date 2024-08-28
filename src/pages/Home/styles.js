import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
  "header"
  "scrollcontent";
`;

export const ScrollContent = styled.div`
  grid-area: scrollcontent;
  overflow-y: auto;
`;

export const Content = styled.main`
  grid-area: content;
  overflow-y: auto;
  @media (min-width: ${BREAKPOINTS.sm}) {
    max-width: 90vw;
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  max-width: 37.6rem;
  height: 12rem;
  margin-block: 6.2rem;
  margin-inline: auto;
  position: relative;
  border-radius: .3rem;
  background: ${({theme}) => theme.COLORS.GRADIENT.GRADIENT200};
  img {
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
  @media (min-width: ${BREAKPOINTS.xs}) {
    max-width: 90%;
    height: 15rem;
    margin-top: 9rem;
    img {
      max-width: 50%
    }
    > div {
      position: absolute;
      left: 45%;
      top: 5rem;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
      > h2 {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 1.4;
      }
      > p {
        font-family: "Popping", sans-serif;
        font-size: 1.4rem;
        line-height: 1.4;
      }
    }
  }
  @media (min-width: ${"900px"}) {
    max-width: 90%;
    height: 15rem;
    margin-top: 12rem;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    max-width: 90%;
    height: 26rem;
    margin-top: 10rem;
    img {
      max-width: 50%;
      left: -5rem;
      bottom: 0;
    }
    > div {
      left: 45%;
      top: 35%;
    }
    > div > h2 {
      font-size: 4rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 1.4;
    }
    > div > p {
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 1;
    }
  }
  @media (min-width: ${"1375px"} ) {
    max-width: 90%;
    height: 26rem;
    margin-top: 16.2rem;
    img {
      max-width: 100%;
      left: -5rem;
      bottom: 0;
    }
    > div {
      left: 50%;
      top: 35%;
    }
    > div > h2 {
      font-size: 4rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 1.4;
      margin-bottom: 8px;
    }
    > div > p {
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 1;
    }
  }
`