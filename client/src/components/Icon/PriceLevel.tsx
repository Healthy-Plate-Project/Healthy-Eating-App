import React from "react";
import { PriceIconStyled } from "../../pages/SearchResult/SingleSearchResultStyles";
import dollarFilled from "../../assets/images/green-dollar.svg";

type PriceLevelProps = {
  priceLevel: number;
};

export function PriceLevel({ priceLevel }: PriceLevelProps) {
  const array = [];
  for (let i = 1; i <= priceLevel; i++) {
    array.push(<PriceIconStyled src={dollarFilled} />);
  }
  return <>{array}</>;
}
