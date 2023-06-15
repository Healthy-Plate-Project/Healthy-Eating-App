import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--primary);

  h4 .sign-up {
    color: var(--dark-600);
    line-height: 4rem;
  }
`;

export const WelcomeText = styled.h2``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 14rem;
  width: 100%;
`;

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 50px;
  height: 3rem;
  width: 16rem;
  color: var(--light);
  background-color: var(--primary);
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.5s;
  cursor: pointer;
  &:active {
    background-color: var(--accent-two);
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

export const PasswordField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

// export const LoginWith = styled.h5`
//   cursor: pointer;
// `;
