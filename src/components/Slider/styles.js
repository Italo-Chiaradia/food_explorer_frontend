import styled from "styled-components";
import BREAKPOINTS from "../../utils/deviceBreakpoints";
import { Swiper } from 'swiper/react';


export const Container = styled(Swiper)`
  margin-bottom: 2.4rem;
  margin-left: 2.4rem;
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
`;