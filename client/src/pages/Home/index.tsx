import React from "react";
import { Search } from "../../components/index";
import HomeTitle from "./Title/Title";
import { HomeWrapper, BackgroundImage } from "./HomeStyles";
import chef from "./Images/chef.svg";
import people from "./Images/people.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundImage src={people} />
      <HomeTitle />
      <Search />
    </HomeWrapper>
  );
};

export default Home;
