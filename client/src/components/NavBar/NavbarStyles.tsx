import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: sticky;
  bottom: 1rem;
  /* display: flex;
  flex-direction: column; */
  flex-wrap: wrap;
  font-size: 2.3rem;
  width: clamp(290px, 90%, 350px);
  background-color: var(--primary);
  padding: 0.5rem;
  border-radius: 10px;
  color: var(--light-600);

  & details {
    font-size: var(--md);
  }

  & summary {
    font-size: var(--lg);
  }

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
