import styled from "styled-components";

interface Props {
  open: boolean;
}

export const NavbarStyled = styled.nav<Props>`
  width: 100%;
  z-index: 10;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #70faaf;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  height: ${({ open }) => (open ? "50vh" : "0vh")};
  transition: height 0.3s ease-in-out;

  a {
    font-size: 2rem;
    color: var(--primary);
    background-color: var(--secondary);
  }
`;
