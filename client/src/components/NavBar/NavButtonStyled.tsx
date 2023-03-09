import styled from "styled-components";

interface Props {
  open: boolean;
}

export const StyledNavButton = styled.button<Props>`
  border: none;
  z-index: 11;

  /* transform: ${({ open }) =>
    open ? "translateX(10%)" : "translateX(10%)"}; */
  height: ${({ open }) => (open ? "50px" : "50px")};
  width: ${({ open }) => (open ? "50px" : "50px")};
  background-color: ${({ open }) =>
    open ? "var(--primary)" : "var(--primary)"};
  /* outline: 0.2rem ${({ open }) =>
    open ? "var(--accent-two)" : "none"} solid; */
  color: ${({ open }) => (open ? "var(--secondary)" : "white")};
  transition: transform 0.3s ease-in-out;
  border-radius: 1rem;
  padding: 0.6rem;
  transition: all 0.5s ease-in-out;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
