import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 0 3rem 0;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: -4rem;
  width: clamp(290px, 130%, 600px);
  filter: grayscale(1) invert(0) brightness(0.8) hue-rotate();
  mix-blend-mode: darken;
`;
