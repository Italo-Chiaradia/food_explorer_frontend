import styled from "styled-components";

export const Container = styled.div`
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

export const Content = styled.div`
  max-width: 31.6rem;
  margin-top: 1.6rem;
  margin-inline: auto;
  margin-bottom: 3.3rem;
  > a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    line-height: 1.4;
    font-weight: 500;
    > img {
      width: .9rem;
    }
  }
  > img {
    max-width: 100%;
    height: auto;
    margin-block: 1.6rem;
    margin-inline: auto;
    display: block;
  }
  > div {
    font-family: "Poppins", sans-serif;
    text-align: center;
    display:flex;
    flex-direction: column;
    gap: 2.4rem;
    > h2 {
      font-size: 2.7rem;
      line-height: 1.4; 
      font-weight: 500;
    }
    > p {
      font-size: 1.6rem;
      line-height: 1.4;
    }
    > .tags-container {
      display: flex;
      gap: 2.4rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  > button {
    margin-top: 4.8rem;
  }
`;