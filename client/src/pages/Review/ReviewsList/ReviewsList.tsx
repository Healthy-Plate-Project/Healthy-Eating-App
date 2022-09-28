import React from "react";
import { ReviewsWrapper, ReviewList } from "./ReviewsListStyles";
import { getReview } from "../../../utils/serverCalls";
import { ButtonStyled } from "../../../components/Button/ButtonStyles";

function ReviewsList(props: any) {
  async function testAPICalls() {
    const getRestaurantReview = getReview;

    console.log(getRestaurantReview);
  }
  return (
    <>
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
        <ButtonStyled onClick={testAPICalls}>Test API</ButtonStyled>
      </ReviewsWrapper>
    </>
  );
}

export default ReviewsList;

// export function Navbar(props: any) {

//   async function testAPICalls() {

//   const getRestaurantReview = await getReview("ChIJn58N1B9gUocRpAXOXPbFcOo");

//   }}

//   return (
//     <NavbarStyled>
//       <Link to="/">Home</Link>
//       <Link to="results">Results</Link>
//       <Link to="review">Review</Link>
//       <Link to="reviews">Reviews</Link>
//       <StyledButton onClick={testAPICalls}>Test API</StyledButton>
//     </NavbarStyled>
//   );
// }
