import styled from "styled-components";
import Close from "../../assets/svg/close.svg?react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
    "header"
    "content";
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  transition: transform .2s ease-in-out;
  transform: translateX(-100%);
  &[data-is-menu-open="true"] {
    transform: translateX(0);
  }
  > header {
    grid-area: header;
    display: grid;
    align-items: end;
    justify-items: start;
    padding: 0 2.4rem 2.8rem;
    background-color: ${({theme}) => theme.COLORS.DARK.DARK700};
    font-size: 2.1rem;
    button {
      background-color: inherit;
      border: none;
      cursor: pointer;  
      margin-right: 1.6rem;
    } 
  }
`;
export const Content = styled.div`
  grid-area: content;
  padding: 3.6rem 2.8rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK400};
  > nav {
    margin-top: 3.6rem; 
  }
`
export const NavButton = styled.button`
  width: 100%;
  text-align: left;
  border: none;
  background-color: inherit;
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  line-height: 1.4;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK.DARK1000};
  padding: 1rem;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    border-bottom-color: ${({theme}) => theme.COLORS.TINTS.CAKE100};
    color: ${({theme}) => theme.COLORS.TINTS.CAKE100};
  }
`;

export const StyledClose = styled(Close)`
  width: 1.8rem;
  height: 1.8rem;
  transition: filter .2s;
  &:hover {
    filter: brightness(.5)
  }
`