import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    background-color: gray;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  };

  a {
    cursor: default;
  }

  h1 {
    display:inline
  }

  h2 {

    display:inline
  }

  h3 {
    font-size: .8rem;
    display:inline
  }
`;

export default GlobalStyle;
