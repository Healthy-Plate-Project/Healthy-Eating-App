import React from "react";
import { HeaderImage, HeaderStyles, HeaderWrapper } from "./HeaderStyles";
import mascot from "../../pages/Home/Images/mascot_color_no_outline.svg";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderImage src={mascot} />
      <HeaderStyles>dragonfruit</HeaderStyles>
    </HeaderWrapper>
  );
}
