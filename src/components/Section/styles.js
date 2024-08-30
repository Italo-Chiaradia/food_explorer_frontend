import styled from "styled-components";

export const Container = styled.label`
  > span {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
    margin-bottom: 1.6rem;
    display: block;
    font-size: 1.6rem;
  }
`;