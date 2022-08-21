import React from "react";
// import { Link } from "react-router-dom";
import { ResultsStyled, Main } from "./ResultsStyles";
import { Search } from "../../components";
import { Result } from "./Result";

const Results = () => {
  return (
    <ResultsStyled>
      <Search />
      <Main>
        <Result />
      </Main>
    </ResultsStyled>
  );
};

export default Results;
