import styled from "styled-components";

const NavbarStyled = styled.nav`
  position: absolute;
  bottom: 4rem;
  display: flex;
  align-items: flex-start;
  height: 1.5rem;
  font-size: 1.5rem;

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

export default NavbarStyled;
