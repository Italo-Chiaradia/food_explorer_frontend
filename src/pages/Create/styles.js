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
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  > a {
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
  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 1.4;
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