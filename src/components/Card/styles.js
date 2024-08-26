import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  background-color: ${({theme}) => theme.COLORS.DARK.DARK200};
`;
export const Image = styled.img`
  width: 8.8rem;
  height: 8.8rem;
`;
export const Title = styled.h1`
`;
export const Price = styled.span`
`;
export const LikeButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    font-size: 2.4rem;
  }
`;