import React from "react";
import { ReviewsSeed } from "./ReviewsSeed";
import { ReviewsList } from "./ReviewsList";
import { ReviewsListParent } from "./ReviewsListStyles";

export function ReviewListParent({ currentUser }: any) {
  return (
    <ReviewsListParent>
      {ReviewsSeed.map((data: any) => {
        return <ReviewsList key={data.id} reviewInfo={data} />;
      })}
    </ReviewsListParent>
  );
}
