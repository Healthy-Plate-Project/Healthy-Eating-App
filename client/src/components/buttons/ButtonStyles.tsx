import styled from "styled-components";

export const ButtonStyles = styled.button`
  background-color: rgb(252, 223, 223);
  border: none;
  border-radius: 50px;
  height: 3rem;
  width: 300px;
  color: rgb(109, 139, 104);
  font-weight: 700;
  font-size: 1rem;
  &:active {
    background-color: #f5dddd;
    box-shadow: 0px 5px 10px #4f6a58;
    transition: all 0.4s;
  }
`;
