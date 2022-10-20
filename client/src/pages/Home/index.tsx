import React from "react";
import { Search } from "../../components/index";
import HomeTitle from "./Title/Title";
import { HomeWrapper, BackgroundImage } from "./HomeStyles";
import mascot from "./Images/mascot_color_no_outline.svg";

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundImage src={mascot} />
      <HomeTitle />
      <Search />
    </HomeWrapper>
  );
};

export default Home;
