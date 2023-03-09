import styled from "styled-components";
import { DefaultInput } from "./DefaultInput";

export const PrimaryInput = styled(DefaultInput)`
  border-radius: 50px;
  border: none;
  height: 3rem;
  color: white;
  background-color: white;
  font-size: 1.5rem;
  padding: 0 0.8rem;

  &:focus {
    background-color: var(--dark);
    outline: 0.3rem var(--secondary) solid;
  }
  ::placeholder {
    color: var(--dark-800);
  }
`;

export const SmallInput = styled(PrimaryInput)`
  height: 3rem;
  font-size: 1rem;
`;

export const LoginInput = styled.input`
  background: var(--secondary);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  /* text-transform: uppercase; */
  &:focus {
    outline: 0.3rem var(--secondary) solid;
    transition: 0.25s;
    transition-timing-function: ease-in-out;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  &::placeholder {
  }
`;

export const SignUpInput = styled(LoginInput)`
  margin: 0.5rem;
`;
