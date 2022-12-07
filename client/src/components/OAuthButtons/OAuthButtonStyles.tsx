import styled from "styled-components";

const HorizontalDivider = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #3b2b3b 0%, #5b4269d1 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const OAuthLoginWith = styled.h5`
  cursor: pointer;
`;

export { HorizontalDivider, IconsContainer, OAuthLoginWith };
