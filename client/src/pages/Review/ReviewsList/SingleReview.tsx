import React from "react";
import { ReviewsWrapper, ReviewList } from "./ReviewsListStyles";

function SingleReview(props: any) {
  return (
    <ReviewsWrapper>
      {/* <ReviewList> */}
      <h3>Rating</h3>
      <h2>{props.reviewInfo.rating}</h2>
      <h3>Accuracy</h3>
      <h2>{props.reviewInfo.accuracy}</h2>
      <h3>Value </h3>
      <h2>{props.reviewInfo.value}</h2>
      {/* </ReviewList> */}
      <ReviewList>
        <div>
          <p>{props.reviewInfo.reviewText}</p>
        </div>
      </ReviewList>
    </ReviewsWrapper>
  );
}

export default SingleReview;
