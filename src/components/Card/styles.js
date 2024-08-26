import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  width: 21rem;
  min-height: 29.2rem;
  padding: 2.4rem;
  margin: 2rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK200};
  border-radius:  .8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: ${BREAKPOINTS.sm}) {
    width: 30.4rem;
    min-height: 46.2rem;
    gap: 1.5rem;
    padding: 2.4rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  > button {
    padding-block: .4rem;
  }
  @media (min-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
    > div {
      > span {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.6;
      }
      flex: 1;
    }
    > button {
      flex: 1;
      padding-block: 1.2rem;
    }
  }
`;

export const Image = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  @media (min-width: ${BREAKPOINTS.sm}) {
    width: 17.6rem;
    height: 17.6rem;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  @media (min-width: ${BREAKPOINTS.sm}) {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;

export const Description = styled.span`
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.6;
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400}
`;

export const Price = styled.span`
  font-size: 1.6rem;
  color: ${({theme}) => theme.COLORS.TINTS.CAKE200};
  @media (min-width: ${BREAKPOINTS.sm}) {
    font-size: 3.2rem;
    line-height: 1.6;
  }
`;

export const TopCornerButton = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  background-color: inherit;
  border: none;
  cursor: pointer;
  > img {
    width: 2.4rem;
    transition: filter .2s;
  }
  > img:hover {
    filter: brightness(.5);
  }
`;