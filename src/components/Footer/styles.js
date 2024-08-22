import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK700};
  display: grid;
  place-items: center;
  @media (max-width: ${BREAKPOINTS.xs}) {
    > div {
      flex-direction: column;
    }
  }
  > div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    > span {
      font-size: 1.2rem;
    }
    > span:first-child {
      display: flex;
      align-items: center;
      font-size: 1.57rem;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT700};
      gap: .7rem;
      > svg {
        width: 2.2rem;
        font-size: 1.8rem;
      }
    }
  }
`;