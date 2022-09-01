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
    /* line-height: .5rem; */
  }

  h2 {
    /* line-height: .5rem; */
  }

  h3 {
    font-size: .8rem;
  }
`;

export default GlobalStyle;
