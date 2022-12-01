import styled from "styled-components/macro";
import DefaultButton from "./DefaultButton";

const PrimaryButton = styled(DefaultButton)`
  color: var(--light);
  background-color: var(--primary);
  border: none;
  border-radius: 50px;
  width: fit-content;
  padding: 0.7rem 1rem;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.5s;

  &:hover {
    background-color: var(--primary-400);
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: 0px 2px 5px #69696990;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

const SearchButton = styled(PrimaryButton)`
  color: var(--light);
  background-color: var(--primary);
  transition: all 0.3s;

  &:hover {
    background-color: var(--primary-400);
    transition: all 0.3s;
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

const LoginButtonStyles = styled(DefaultButton)`
  background: linear-gradient(to right, #3b2b3b 0%, #5b4269d1 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export { PrimaryButton, SearchButton, LoginButtonStyles };
