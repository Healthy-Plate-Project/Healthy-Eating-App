import styled from "styled-components/macro";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  margin-top: 2rem;
  padding-top: 2rem;
  background: rgba(48, 48, 48, 0.15);
  box-shadow: 0 8px 32px 0 rgba(48, 48, 48, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    border-radius: 50px;
    height: 3rem;
    width: 300px;
    color: #f2f2f2;
    background-color: rgb(48, 48, 48);
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.5s;
    cursor: pointer;
    &:active {
      background-color: #4f4f4f;
      box-shadow: 0px 5px 10px #696969;
      transition: all 0.3s;
      transform: scale(101%);
    }
  }
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;
