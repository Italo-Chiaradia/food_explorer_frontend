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
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 7.7rem;
  grid-template-areas: 
  "content"
  "footer";
  overflow: auto;
`;

export const Content = styled.form`
  margin: 1.5rem 3.2rem 5rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  > a {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    display: flex;
    align-items: center;
    gap: .8rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    > img {
      width: .8rem;
    }
  }
  @media (min-width: ${BREAKPOINTS.sm}) {
    max-width: min(90vw, 112rem);
    margin-inline: auto;
    margin-top: 4rem;
    margin-bottom: 11.6rem;
    gap: 3.2rem;
    > a {
      display: flex;
      align-items: center;
      gap: .8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
      > img {
        width: 1.2rem;
      }
    } 
    > button {
      width: fit-content;
      align-self: end;
    }
  }
  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > .cols3 {
    display: grid;
    grid-template-columns:  1fr 2fr 1fr;
    column-gap: 3.2rem;
  }
  > .cols2 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 3.2rem;
  }
  > .flexContainer {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const TagContainer = styled.div`
  padding: .8rem;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK800};
  border-radius: .8rem;
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  @media (max-width: ${"490px"}) {
    justify-content: center;
  }
`;