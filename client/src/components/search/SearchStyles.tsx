import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 0;

  input {
    border-radius: 50px;
    border: none;
    height: 3rem;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    padding: 0 0 0 1rem;
  }

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
    &:active {
      background-color: #4f4f4f;
      box-shadow: 0px 5px 10px #696969;
      transition: all 0.3s;
      transform: scale(101%);
    }
  }
`;

export default SearchWrapper;
