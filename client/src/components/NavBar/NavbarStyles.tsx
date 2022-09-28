import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  height: 1.5rem;
  font-size: 1.5rem;
  width: 90%;

  & a {
    text-decoration: none;
    padding: 0 1rem;
    transition: all 0.5s;
  }

  & a:visited {
    color: aliceblue;
    transition: all 0.3s;
  }

  & a:hover {
    color: lightgray;
    transition: all 0.3s;
  }

  & a:active {
    color: black;
    transition: all 0.3s;
  }
`;

export const StyledButton = styled.div`
  color: #bec0c0;
  cursor: pointer;

  & a {
    text-decoration: none;
    padding: 0 1rem;
    transition: all 0.5s;
  }

  & a:visited {
    color: aliceblue;
    transition: all 0.3s;
  }
  & a:hover {
    color: lightgray;
    transition: all 0.3s;
  }
  & a:active {
    color: black;
    transition: all 0.3s;
  }
`;
