import React from "react";
import { Search } from "../../components/index";
import HomeTitle from "./Title";
import HomeWrapper from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeTitle />
      <Search />
    </HomeWrapper>
  );
};

export default Home;
