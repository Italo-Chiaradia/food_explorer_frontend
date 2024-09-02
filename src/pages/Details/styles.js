import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";

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
  margin-bottom: 5rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  > div.dish-image {
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
  }
  > div.dish-content {
    display: flex;
    flex-direction: column;
    > div.dish-info {
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
    > div.dish-count {
      margin-top: 4.8rem;
      display: flex;
      > div {
        flex: 1;
      }
      > button.order-btn {
        flex: 1;
        font-size: 1.2rem;
        > svg {
          font-size: 2rem;
        }
      }
    }
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    max-width: min(90vw, 112rem);
    height: fit-content;
    align-items: center;
    margin-top: 2.4rem;
    flex-direction: row;
    gap: 4.7rem;

    > div.dish-image {
      > a {
        font-weight: 700;
        > img {
          width: 1.2rem;
        }
      }
      > img {
        max-width: 39rem;
        height: auto;
        margin-top: 4.2rem;
      }
    }

    > div.dish-content {
      > div.dish-info {
        align-items: start;
        text-align: start;
        > .tags-container {
          justify-content: start;
        }
        h2 {
          font-size: 4rem;
          font-weight: 500;
        }
        p {
          font-size: 2.4rem;
        }
      }
      > div.dish-count {
        gap: 3.3rem;
        > button.order-btn {
          font-size: 1.4rem;
        }
        > div, button.order-btn, button {
          width: fit-content;
          flex: none;
          justify-self: start;
        }
      } 
    }
  }
`;