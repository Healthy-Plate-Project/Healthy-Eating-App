import React from "react";
import { ResultStyled, ItemStyled, ItemDetail } from "./ResultStyled";
import { resultSeed } from "./resultSeed";

const payloadList = resultSeed.map(({ name, distance, keyword, price }) => {
  return (
    <ItemStyled key={name}>
      <h1>{name}</h1>
      <ItemDetail>
        <h2>{keyword}</h2>
        <h2>{price}</h2>
        <h3>{distance}</h3>
      </ItemDetail>
    </ItemStyled>
  );
});

export const Result = () => {
  return <ResultStyled>{payloadList}</ResultStyled>;
};
