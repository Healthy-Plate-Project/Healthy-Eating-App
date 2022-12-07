import React, { useState } from "react";
import { Link } from "react-router-dom";
import { convertMilesToMeters } from "../../utils/helpers";
import {
  createReview,
  deleteFavRestaurantByUser,
  deleteReview,
  getFavRestaurantByUser,
  getRestaurant,
  getRestaurants,
  getReview,
  getReviewsByRestaurant,
  getReviewsByUser,
  saveFavRestaurantByUser,
  updateReview,
} from "../../utils/serverCalls";
import { NavbarStyled, NavMenu, ButtonWrapper, StyledButton } from "./NavbarStyles";
import { MenuButton } from "../../components/Button/ButtonStyles";
import { GenerateDummyReviews } from "../../pages/Review/GenerateDummyReviews";

export function Navbar(props: any) {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setCurrentUserEmail("");
  };

  async function testAPICalls() {
    // const getRestaurantsResults = await getRestaurants({
    //   latitude: "40.4865496",
    //   longitude: "-111.9164662",
    //   keyword: "thai",
    //   max_price: 3,
    //   min_price: 2,
    //   open_now: true,
    //   radius: convertMilesToMeters(10),
    //   // TODO: use this to setup pagination
    //   // pageToken: req.pageToken,
    // });
    // const getRestaurantResults = await getRestaurant(
    //   "ChIJn58N1B9gUocRpAXOXPbFcOo"
    // );
    // const saveRestaurantResults = await saveRestaurant({
    //   place_id: "testID1",
    //   restaurant_name: "testName",
    //   longitude: "testLong",
    //   latitude: "testLat",
    //   photo_reference: "testPhoto",
    // });
    // const createRestaurantReview = await createReview({
    //   place_id: "ChIJn58N1B9gUocRpAXOXPbFcOo",
    //   user_id: "testUser",
    //   review_text: "This is a test review",
    //   overall_rating: 5,
    //   dairy_free_rating: 5,
    //   gluten_free_rating: undefined,
    //   nut_free_rating: undefined,
    //   pescatarian_rating: undefined,
    //   vegan_rating: 3,
    //   vegatarian_rating: undefined,
    // });
    // const updateRestaurantReview = await updateReview(
    //   "ChIJn58N1B9gUocRpAXOXPbFcOo",
    //   {
    //     gluten_free_rating: 5,
    //     vegan_rating: 3,
    //   }
    // );
    // const deleteRestaurantReview = await deleteReview(
    //   "ChIJn58N1B9gUocRpAXOXPbFcOo"
    // );
    // const getRestaurantReview = await getReview("ChIJn58N1B9gUocRpAXOXPbFcOo");
    // const getRestaurantReviewsByUser = await getReviewsByUser("testUser-2");
    // const getRestaurantReviewsByRestaurant = await getReviewsByRestaurant(
    //   "ChIJJbvRDqpjUocRxTf5zYtwZ18"
    // );

    // console.log(getRestaurantReviewsByRestaurant);
    // console.log(getRestaurantReviewsByUser);
    // console.log(getRestaurantReview);
    // console.log(deleteRestaurantReview);
    // console.log(updateRestaurantReview);
    // console.log(createRestaurantReview);
    // console.log(getRestaurantsResults);
    // console.log(getRestaurantResults);
    // console.log(saveFavRestaurantTest);
    // console.log(getFavRestaurantsByUserTest);
    // console.log(deleteFavRestaurantByUserTest);
  }

  return (
    <NavbarStyled>
      <ButtonWrapper>
        <MenuButton
          className="menu-button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        ></MenuButton>
      </ButtonWrapper>

      <Link to="/">Home</Link>
      <Link to="advanced-search">Advanced Search</Link>
      <Link to="results">Results</Link>
      <Link to="review">Review</Link>
      <Link to="reviews">Reviews</Link>
      <StyledButton onClick={() => testAPICalls()}>Test API</StyledButton>
      <Link to={"/single-result/ChIJn58N1B9gUocRpAXOXPbFcOo"}>
        Single Result
      </Link>

    </NavbarStyled>
  );
}
