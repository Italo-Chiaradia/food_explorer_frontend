import styled from "styled-components";

export const Container = styled.div`
  form {
    max-width: 31.6rem;
    margin: 15.8rem auto 0;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem
  }
  header > h1 {
    font-size: 3.22rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100}
  }
  header > img {
    width: 4.33rem;
    height: 4.33rem;
  }
`;

