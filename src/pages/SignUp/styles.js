import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 31.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 7.3rem;
  }
  header > h1 {
    font-size: 3.72rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100}
  }
  header > img {
    width: 4.33rem;
    height: 4.33rem;
  }
  a { 
    width: fit-content;
    margin: 0 auto;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s;
  }
  a:hover {
    filter: brightness(.5);
  }
  a:focus {
    text-decoration: underline;
    outline: none;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    justify-content: space-between;
    margin-inline: 10.8rem;
    header > h1 {
      font-size: 4.2rem;
    }
    header > img {
      width: 4.9rem;
      height: 4.7rem;
    }
    form {
      width: 47.6rem;
      
      background-color: ${({theme}) => theme.COLORS.DARK.DARK700};
      padding: 6.4rem;
      border-radius: 1.6rem;
      h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 3.2rem; 
        line-height: 1.4;
        text-align: center;
      }
    }
  }
`;

