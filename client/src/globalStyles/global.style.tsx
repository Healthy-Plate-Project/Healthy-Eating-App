import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: Helvetica , sans-serif; 
    }
    
    #root{
        margin:0 auto;
    }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    background-color: #4e4e4e;
    color: white;
    overflow: hidden;
  };

  a {
    cursor: default;
  }
  a:visited {
    color:blue
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
