import styled from "styled-components";

const ButtonStyled = styled.button`
  color: var(--dark);
  background-color: var(--secondary);
  border: none;
  border-radius: 50px;
  height: 3rem;
  width: fit-content;
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.5s;

  &:hover {
    background-color: var(--primary-400);
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

const SecondaryButtonStyled = styled(ButtonStyled)``;

const LoginButtonStyles = styled(ButtonStyled)`
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

export { ButtonStyled, LoginButtonStyles };
