import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchWrapper from "./SearchStyles";

const Search = () => (
  <SearchWrapper>
    <Input />
    <Link to="results">
      {" "}
      <Button />
    </Link>
  </SearchWrapper>
);

export default Search;
