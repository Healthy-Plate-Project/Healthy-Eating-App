import React from "react";
import { ReviewsWrapper, ReviewList } from "./ReviewsListStyles";

function ReviewsList(props: any) {
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
        <div>
          <p>{props.reviewInfo.reviewText}</p>
        </div>
      </ReviewList>
    </ReviewsWrapper>
  );
}

export default ReviewsList;

// function ReviewsList() {
//   return (
//     <>
//       {ReviewsSeed.map(({ rating, accuracy, value, reviewText }) => (
//         <ReviewsWrapper>
//           <ReviewList>
//             <h3>
//               Rating <h2>{rating}</h2>
//             </h3>
//             <h3>
//               Accuracy <h2>{accuracy}</h2>
//             </h3>
//             <h3>
//               Value <h2>{value}</h2>
//             </h3>
//           </ReviewList>
//           <ReviewList>
//             <div>
//               <p>{reviewText}</p>
//             </div>
//           </ReviewList>
//         </ReviewsWrapper>
//       ))}
//     </>
//   );
// }
