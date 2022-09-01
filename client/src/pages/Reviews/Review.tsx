import React from "react";
import { ReviewStyled, ReviewText } from "./ReviewStyled";
import  ReviewsStyled from "./ReviewsStyled"
import { reviewSeed } from "./reviewSeed";

const payloadList = reviewSeed.map(({ user, rating, keyword, value, reviewText }) => {
    return (
        <>
      <ReviewStyled key={user}>
        <h1>{user}</h1>
        <h2>{rating}</h2>
        <h2>"{keyword}"</h2>
        <h2>{value}</h2>
        <ReviewText>
            <h3>{reviewText}</h3>
        </ReviewText>
      </ReviewStyled>
    </>
    );
  });

export const Review = () => {
  return <ReviewsStyled>{payloadList}</ReviewsStyled>;
};
