import React from "react";
import { ReviewsWrapper, ReviewList } from "./ReviewsListStyles";

export function ReviewsList(props: any) {
  return (
    <ReviewsWrapper>
      <ReviewList>
        <h3>Rating</h3>
        <h2>{props.reviewInfo.rating}</h2>
        <h3>Accuracy</h3>
        <h2>{props.reviewInfo.accuracy}</h2>
        <h3>Value </h3>
        <h2>{props.reviewInfo.value}</h2>
      </ReviewList>
      <ReviewList>
        <p>{props.reviewInfo.reviewText}</p>
      </ReviewList>
    </ReviewsWrapper>
  );
}
