import React from "react";

import { Link } from "react-router-dom";
import HomeTitle from "./Title/Title";
import { HomeWrapper, BackgroundImage } from "./HomeStyles";
import people from "../../assets/images/people.svg";

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundImage src={people} />
      <HomeTitle />
      <input className="home-search-input" />
      <Link to="results">
        <button className="search-button">Search</button>
      </Link>
    </HomeWrapper>
  );
};

export default Home;
