import styled from "styled-components";

interface Props {
  open: boolean;
}

export const StyledNavButton = styled.button<Props>`
  border: none;
  z-index: 11;
  color: ${({ open }) => (open ? "#ff7b7b" : "#dfe4ee")};
  background-color: ${({ open }) => (open ? "#ff7b7b" : "#ff7b7b")};
  /* transform: ${({ open }) => (open ? "translateX(10%)" : "translateX(10%)")};
  height: ${({ open }) => (open ? "80px" : "40px")};
  width: ${({ open }) => (open ? "25vw" : "5vw")}; */
  transition: transform 0.3s ease-in-out;
  border-radius: 1rem;
  padding: 0.6rem;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 90vh;
  right: 2rem;
`;
