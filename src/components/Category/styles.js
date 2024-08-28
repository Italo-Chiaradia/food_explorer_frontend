import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
export const Container = styled.div`
  margin-bottom: 2.4rem;
  margin-left: 2.4rem;
  > h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2.4rem;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    
  }
  .swiper-button-prev, .swiper-button-next {
    &::after {
      border-radius: 50%;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    }
  }
  @media (min-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 4.8rem;
    > h2 {
      font-family: "Poppins", sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 1.4;
      margin-bottom: 2.4rem;
    }
  }
`;