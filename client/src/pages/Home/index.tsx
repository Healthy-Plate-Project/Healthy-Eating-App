import React from "react";
import { HomeTitle } from "./Title/Title";
import { HomeWrapper, BackgroundImage } from "./HomeStyles";
import mascot from "./Images/mascot_color_no_outline.svg";
import { Search } from "../../components/Search/Search";

export function Home() {
  return (
    <HomeWrapper>
      <BackgroundImage src={mascot} />
      <HomeTitle />
      <Search />
    </HomeWrapper>
  );
}
