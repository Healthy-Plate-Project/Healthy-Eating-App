import React from "react";
import { StyledNavButton } from "./NavButtonStyled";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const NavButton: React.FC<Props> = ({ setOpen, open }) => {
  return (
    <StyledNavButton open={open} onClick={() => setOpen(!open)}>
      menu
    </StyledNavButton>
  );
};
