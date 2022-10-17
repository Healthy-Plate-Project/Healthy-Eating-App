import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --primary: #ff7b7b;
  --primary-400: #e57676;
  --primary-600:#FFC0C0;
  --secondary: #70faaf;
  --secondary-400: #44E78E;
  --secondary-600: #c0ffdc;
  --accent-one: #3f76a6;
  --accent-two: #e7ff39;
  --accent-two-400: #CEE330;
  --accent-two-600: #CEE330;
  --light: #e7ebf4;
  --dark: #3b3b41;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Comfortaa", sans-serif;
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
  background-color: var(--light);
  color: white;
}

a {
  cursor: default;
}

h1 {
  font-weight: Bold;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -4px;
  color: var(--primary)
}

h2 {
  font-weight: Bold;
  font-size: 2.5rem;
  letter-spacing: -2px;
}

h3 {
  font-weight: Bold;
  font-size: 2rem;
}

.title {
  font-weight: Bold;
  font-size: 5rem;
  line-height: 4.5rem;
  letter-spacing: -7px;
  color: var(--primary)
}

.subtitle {
  font-weight: Medium;
  font-size: 1.5rem;
}
.pretitle {
  font-weight: Bold;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.body {
  font-weight: Bold;
  font-size: 1.3rem;
}

`;

export default GlobalStyle;
