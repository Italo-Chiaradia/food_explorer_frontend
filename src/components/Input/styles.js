import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 1.4rem;
  height: 4.8rem;
  border: .1rem solid transparent;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK800};
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    margin-left: 1.6rem;
  }

  span {
    margin-bottom: 0;
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
  }
  > svg {
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
  }
  &:focus-within {
    border: .1rem solid ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  }
`;

export const InputField = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT500};
  }

  &[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0%;
    opacity: 0;
    cursor: pointer;
  }
`;