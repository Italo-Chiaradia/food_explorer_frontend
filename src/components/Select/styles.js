import styled from "styled-components";

export const Container = styled.label`
  > span {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
    margin-bottom: 1.6rem;
    display: block;
    font-size: 1.6rem;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  > select {
    cursor: pointer;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK.DARK900};
    padding: 1.3rem 1.6rem;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
    font-size: 1.4rem;
    line-height: 1.6;
    border-radius: .5rem;
    border: 1px solid transparent;
    -webkit-appearance: none; /* Remove o estilo padrão do select */
    -moz-appearance: none;
    appearance: none;
  }
  > select:focus {
    outline: none;
    border: 1px solid;
  }
  > img {
    position: absolute;
    bottom: 1.8rem;
    right: 1.5rem;
  }
`;