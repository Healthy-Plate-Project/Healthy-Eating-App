import styled from "styled-components";

const ButtonStyles = styled.button`
  border: none;
  border-radius: 50px;
  height: 3rem;
  width: 300px;
  color: #f2f2f2;
  background-color: rgb(48, 48, 48);
  /* color: rgb(109, 139, 104); */
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.5s;
  &:active {
    background-color: #4f4f4f;
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

const AuthenticationButton = styled.button`
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

export { ButtonStyles, AuthenticationButton };
