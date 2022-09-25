import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(290px, 100%, 600px);
  height: 100%;
  margin: 0 auto;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: -1rem;
  width: clamp(290px, 100%, 400px);
  filter: grayscale(1) invert(0) brightness(0.8) hue-rotate();
  mix-blend-mode: darken;
`;

export { HomeWrapper, BackgroundImage };
