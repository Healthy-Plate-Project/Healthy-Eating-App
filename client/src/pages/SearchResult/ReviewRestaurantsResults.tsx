import React, { useEffect, useState } from "react";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { API, apiCall } from "../../utils/serverCalls";
import { MulitpleResults } from "./MultipleResults";
import { Header } from "../../components/Header/Header";

type ReviewRestaurantResultsProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function ReviewRestaurantsResults({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: ReviewRestaurantResultsProps) {
  const [reviewedRestaurants, setReviewedRestaurants] = useState(
    [] as Restaurant[]
  );

  useEffect(() => {
    async function fetchReviewedRestaurants() {
      if (!currentUser.reviews) {
        return;
      }
      const reviewedRestaurants = await Promise.all(
        currentUser.reviews.map(async (review) => {
          const data = await apiCall(API.getRestaurant, {
            place_id: review.place_id,
          });
          return {
            ...data,
            review,
            _id: review._id,
          };
        })
      );
      setReviewedRestaurants(reviewedRestaurants);
      setSpinner(false);
    }
    fetchReviewedRestaurants();
  }, [currentUser]);

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <>
      {Header()}
      <h3>Reviewed Restaurants</h3>
      <MulitpleResults
        restaurants={reviewedRestaurants}
        currentUser={currentUser}
        currentUserTrigger={currentUserTrigger}
        setCurrentUserTrigger={setCurrentUserTrigger}
      ></MulitpleResults>
    </>
  );
}
