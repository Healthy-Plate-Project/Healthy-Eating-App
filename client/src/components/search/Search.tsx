import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../Button/Button";
import SearchWrapper from "./SearchStyles";

const Search = () => (
  <SearchWrapper>
    <Input />
    <Link to="results">
      {" "}
      <Button content="Search" name="search" />
    </Link>
  </SearchWrapper>
);

export default Search;
