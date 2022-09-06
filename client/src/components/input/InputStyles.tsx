import styled from "styled-components";

const InputStyled = styled.input`
  border-radius: 50px;
  border: none;
  height: 3rem;
  /* border: 1px black solid; */
  background-color: white;
  /* color: #6b9077; */
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  padding: 0 0 0 1rem;
`;

const LoginInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 8px 32px 0 rgba(49, 48, 49, 0.562);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
    border: none;
  }
  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const SignUpInput = styled(LoginInput)`
  margin: 0.5rem;
`;

export { InputStyled, LoginInput, SignUpInput };
