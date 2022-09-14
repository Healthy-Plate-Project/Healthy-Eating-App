import React from "react";
import { ReviewsSeed } from "./ReviewsSeed";
import ReviewsList from "./ReviewsList";
import { ReviewsListParent } from "./ReviewsListStyles";

function ReviewListParent() {
  return (
    <ReviewsListParent>
      {ReviewsSeed.map((data: any) => {
        return <ReviewsList key={data.id} reviewInfo={data} />;
      })}
    </ReviewsListParent>
  );
}

export default ReviewListParent;
