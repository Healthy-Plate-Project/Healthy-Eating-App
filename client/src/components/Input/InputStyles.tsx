import styled from "styled-components";
import DefaultInput from "./DefaultInput";

const PrimaryInput = styled(DefaultInput)`
  /* outline: 3px var(--secondary-600) solid; */
  border-radius: 50px;
  border: none;
  height: 3rem;
  color: var(--dark-600);
  background-color: var(--light-600);
  font-size: 1.5rem;
  padding: 0 0.8rem;
  &:focus {
    background-color: var(--accent-two);
    outline: none;
  }
  ::placeholder {
    color: var(--dark-800);
  }
`;

const SmallInput = styled(PrimaryInput)`
  height: 2rem;
  font-size: 1rem;
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
    color: var(--light);
    font-weight: 100;
    font-size: 1rem;
  }
`;

const SignUpInput = styled(LoginInput)`
  margin: 0.5rem;
`;

export { PrimaryInput, SmallInput, LoginInput, SignUpInput };
