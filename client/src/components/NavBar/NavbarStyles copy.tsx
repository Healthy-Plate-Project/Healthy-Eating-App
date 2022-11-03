import styled from "styled-components";
import { CreateIcon } from "../../assets/icons/index";

export const NavbarStyled = styled.nav`
  position: sticky;
  width: 3rem;
  background-color: var(--accent-two-400);
  border-radius: 10px;
  color: var(--light-600);

  /* icon */
  & details::before {
    content: url(${CreateIcon});
    width: 3rem;
    position: relative;
    display: inline-block;
    mix-blend-mode: darken;
    filter: invert(0);
    vertical-align: middle;
  }

  & details {
    width: 4rem;
    border-radius: 50px;
    padding: 0.5rem;
  }

  & summary {
    font-size: var(--lg);
    list-style-image: url(${CreateIcon});
    position: relative;
    mix-blend-mode: lighten;
  }

  & a {
    text-decoration: none;
    padding: 0 1rem;
    transition: all 0.5s;
  }

  & a:visited {
    text-decoration: none;
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
  color: var(--light-600);
  cursor: pointer;

  & a {
    text-decoration: none;
    padding: 0 1rem;
    transition: all 0.5s;
  }

  & a:visited {
    transition: all 0.3s;
  }
  & a:hover {
    transition: all 0.3s;
  }
  & a:active {
    color: var(--accent-two);
    transition: all 0.3s;
  }
`;
