import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  margin: 0 auto;
  padding-top: 2rem;
  /* background: rgba(48, 48, 48, 0.15); */

  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  @media only screen and (max-width: 320px) {
    width: 100vw;
    height: 90vh;
  }
  @media only screen and (min-width: 360px) {
    width: 100vw;
    height: 90vh;
  }
  @media only screen and (min-width: 411px) {
    width: 70vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 60vw;
    height: 90vh;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1024px) {
    width: 40vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 40vw;
    height: 90vh;
  }
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 5rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin: 3rem;
`;

export const ButtonContainer = styled.div`
  margin: 4rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.p`
  cursor: pointer;
  color: var(--dark);
  font-size: var(--xs);
`;
