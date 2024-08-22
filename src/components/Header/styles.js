import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 11.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK700};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2.8rem 2.4rem;
`;

export const Menu = styled.button`
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    font-size: 2.4rem;
    transition: color .2s;
  }
  > svg:hover {
    filter: brightness(.5);
  }
`;

export const Logo = styled.div`
  display: flex;
  &[data-role="admin"] {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.TINTS.CAKE200};
  }
  align-items: center;
  gap: .8rem;
  > svg {
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.TINTS.CAKE100};
  }
  > h1 {
    font-size: 2.1rem;
    font-weight: 700;
  }

`;

export const Orders = styled.button`
  border: none;
  background-color: inherit;
  position: relative;
  display: flex;
  cursor: pointer;
  > span {
    position: absolute;
    background-color:${({theme}) => theme.COLORS.TINTS.TOMATO100}; 
    padding: .2rem .5rem;
    border-radius: 50%;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    top: -.5rem;
    right: -.5rem;
    z-index: 1;
  }
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    font-size: 3.2rem;
    transition: color .2s;
  }
  > svg:hover {
    filter: brightness(.5);
  }
  > svg:hover + span {
    filter: brightness(.5);
  }
`;