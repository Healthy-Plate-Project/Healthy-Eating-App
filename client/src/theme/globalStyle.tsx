import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  //colors
  --primary: #ff7b7b;
  --primary-400: #d87676;
  --primary-600:#FFC0C0;
  --secondary: #70faaf;
  --secondary-200: #31bf71;
  --secondary-400: #44E78E;
  --secondary-600: #c0ffdc;
  --accent-one: #3f76a6;
  --accent-one-400: #27537a;
  --accent-one-600: #a6c5e0;
  --accent-two: #d5e942;
  --accent-two-400: #bad206;
  --accent-two-600: #e7f582;
  --light: #dfe4ee;
  --light-400: #cecedc;
  --light-600: #f0f5ff;
  --dark: #3b3b41;
  --dark-400: #1f1f24;
  --dark-600: #5c5c5c;
  --dark-800: #9b9b9b;
  --white:#ffffff;
  --black:#000000;

  //font size
--xs: .5rem;
--sm: 1rem;
--md: 1.5rem;
--lg: 2rem;
--xl:2.5;

background-color: var(--light);
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

.app {
  width: clamp(400px, 100vw, 200px);
  margin: 0 auto;
}

a {
  cursor: pointer;
}


a:link {

  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
}

h1 {
  color: var(--primary);
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -4px;
}

h2 {
  color: var(--primary);
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: -2px;
}

h3 {
  color: var(--primary);
  font-weight: bold;
  font-size: 2rem;
}

input {
  font-family: "Comfortaa", sans-serif;
}

p {
  font-weight: Bold;
  font-size: 1.3rem;
  color: var(--dark)
}

.title {
  font-family: 'Comfortaa', sans-serif;
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
  color: var(--dark)
}
`;
