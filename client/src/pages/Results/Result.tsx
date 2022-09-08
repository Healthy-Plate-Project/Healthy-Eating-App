import React from "react";
import { ResultStyled, ItemStyled, ItemDetail } from "./ResultStyled";
import { resultSeed } from "./resultSeed";


const payloadList = resultSeed.map(({ name }) => {
  return (

    <ItemStyled key={name}>
    <ItemDetail>
 
    </ItemDetail>
    </ItemStyled>
  );
});

export const Result = () => {
  return <ResultStyled>{payloadList}</ResultStyled>;
};
