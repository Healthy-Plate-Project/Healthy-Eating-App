import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: clamp(290px, 100%, 600px);
  height: 60%;
  margin: 0 auto;

  input {
    border-radius: 50px;
    border: none;
    height: 3rem;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    padding: 0 0 0 1rem;
    width: 18rem;
  }

  button {
    border: none;
    border-radius: 50px;
    height: 3rem;
    width: 18rem;
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

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: -1rem;
  width: clamp(290px, 100%, 400px);
  filter: grayscale(1) invert(0) brightness(0.8) hue-rotate();
  mix-blend-mode: darken;
`;

export { HomeWrapper, BackgroundImage };
