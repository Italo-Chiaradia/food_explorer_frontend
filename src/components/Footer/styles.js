import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK.DARK700};
  display: grid;
  place-items: center;
  z-index: 2;
  > div {
    width: min(90vw, 112rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    flex-direction: row;

    > div {
      font-size: 1.4rem;
    }

    > div:first-child {
      display: flex;
      align-items: center;
      font-size: 1.57rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT700};
      gap: 0.7rem;

      > svg {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: ${"362px"}) {
    > div {
      flex-direction: column;
    }
  }
  @media (min-width: ${BREAKPOINTS.xs}) {
    > div > div:first-child {
      font-size: 2.4rem;
      gap: 1.1rem;

      > svg {
        font-size: 2.9rem;
      }
    }
  }
`;