import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 75%;
  color: var(--primary-600);
  padding: 0;
  margin: 4rem;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  padding: 0;
  margin: 0;
`;

export const NavMenu = styled.div`
  & ul {
    background-color: var(--secondary);
    display: none;
    height: 0%;
    width: 0;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 1;
  }

  & li {
    list-style-type: none;
    font-size: var(--lg);
    text-align: center;
    width: 100%;
    transition: all 0.5s;
    padding: 0;
    margin: 0;
  }

  & li a {
    text-decoration: none;
    display: block;
    color: var(--accent-one-400);
    padding: 1.5rem 0;
  }

  & li:hover {
    color: var(--accent-one);
    background-color: var(--primary-600);
    width: 100%;
    transition: all 0.5s;
  }

  .expanded ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding: 0 0 4rem;
    margin: 0;
  }
`;

export const StyledButton = styled.div`
  cursor: pointer;
  & a {
    text-decoration: none;
  }
  & a:visited {
  }
  & a:hover {
  }
  & a:active {
    color: var(--accent-two);
  }
`;
