import React from "react";
// import { Link } from "react-router-dom";
import { ResultsStyles, Main } from "./ResultsStyles";
import { Search } from "../../components";
import { Result } from "./Result";

const Results = () => {
  return (
    <ResultsStyles>
      <Search />
      <Main>
        <Result />
      </Main>
    </ResultsStyles>
  );
};

export default Results;