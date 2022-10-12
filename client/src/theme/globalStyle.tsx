import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  }

  body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: gray;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }

  a {
    cursor: pointer;
  }

  h1 {
    line-height: .5rem;
  }

  h2 {
    line-height: .5rem;
  }

  h3 {
    line-height: .5rem;
  }
`;

export default GlobalStyle;
