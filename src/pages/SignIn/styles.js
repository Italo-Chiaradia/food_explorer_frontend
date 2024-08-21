import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 31.6rem;
    /* margin: 15.8rem auto 0; */
    > div {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }
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
`;

