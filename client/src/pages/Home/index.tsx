import React from "react";
import { Search } from "../../components/index";
import HomeTitle from "./Title/Title";
import { HomeWrapper, BackgroundImage } from "./HomeStyles";
import people from "../../assets/images/people.svg";

const Home = () => {
  return (
    <HomeWrapper>
      {/* <BackgroundImage src={people} /> */}
      <HomeTitle />
      <Search />
    </HomeWrapper>
  );
};

export default Home;
