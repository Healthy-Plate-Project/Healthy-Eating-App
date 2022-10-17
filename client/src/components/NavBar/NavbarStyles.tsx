import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: right;
  font-size: 1.3rem;
  width: clamp(290px, 95%, 350px);
  background-color: var(--primary);
  padding: 0.5rem;
  border-radius: 10px;

  p {
    display: flex;
    flex-direction: column;
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
