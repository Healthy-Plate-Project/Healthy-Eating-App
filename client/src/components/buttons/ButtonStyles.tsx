import styled from "styled-components";

const ButtonStyles = styled.button`
  border: none;
  border-radius: 50px;
  width: 300px;
  height: 3rem;
  color: #f2f2f2;
  background-color: rgb(48, 48, 48);
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.5s;
  
  &:active {
    background-color: #4f4f4f;
    box-shadow: 0px 5px 10px #696969;
    transform: scale(101%);
    transition: all 0.3s;
  }
`;

export default ButtonStyles;
