import styled from "styled-components";
import { Link } from "react-router-dom";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
import ExplorerLogo from "../../assets/svg/explorer-logo.svg?react";

export const Container = styled.header`
  grid-area: header;
  height: 11.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK700};
  > div {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 2.8rem 2.4rem;
  
    @media (min-width: ${BREAKPOINTS.sm}) {
      max-width: 90vw;
      margin: auto;
      align-items: center;
      padding: 0;
      gap: 2.4rem;
      .search-bar {
        flex: 1;
      }
      > button.btn {
        width: fit-content;
      }
    }
    @media (min-width: ${BREAKPOINTS.md}) {
      max-width: 80vw;
      gap: 3.2rem;
      > button.btn {
        width: 21.6rem;
      }
    }
    @media (min-width: ${BREAKPOINTS.lg}) {
      max-width: 112rem;
      .search-bar label > div {
        justify-content: center;
        > input {
          width: 50%;
        }
      }
    }
  }
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

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: .8rem;
  div {
    display: flex;
    align-items: center;
    gap: .8rem;
  }
  div > h1 {
    font-size: 2.1rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
  }
  > span {
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.TINTS.CAKE200};
  }
  &[data-role="admin"] {
    flex: 1;
    justify-content: center;
  }
  @media (min-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    align-items: flex-end;
    gap: .2rem;
    &[data-role="admin"] {
      flex: none;
    }
  } 
`;

export const StyledLogo = styled(ExplorerLogo)`
  width: 2.5rem;
  height: 2.5rem;
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

export const LogOutButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: filter .2s;
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    font-size: 3.2rem;
  }
  > svg:hover {
    filter: brightness(.5);
  }
`;