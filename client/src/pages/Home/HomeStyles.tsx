import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(290px, 100%, 600px);
  height: 100%;
  margin: 0 auto;
`;

export const BackgroundImage = styled.img`
  width: clamp(290px, 100%, 400px);
  mix-blend-mode: darken;
`;
