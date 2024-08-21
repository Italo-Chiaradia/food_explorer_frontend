import styled from "styled-components";


export const Container = styled.label` 
  display: block;
  span {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
    margin-bottom: .8rem;
    display: block;
    font-size: 1.6rem;
  }
  > div {
    padding: 1.6rem 1.4rem;
    border-radius: .8rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    background-color: ${({theme}) => theme.COLORS.DARK.DARK900};
    > input {
      width: 100%;
      background-color: inherit;
      border: none;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    }
    > input::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT500};
    }
    > svg {
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
    }
  }
  
`;