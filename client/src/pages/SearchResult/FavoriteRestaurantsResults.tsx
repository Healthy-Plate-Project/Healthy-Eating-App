import React, { useEffect, useState } from "react";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { MulitpleResults } from "./MultipleResults";

type FavRestaurantResultsProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function FavRestaurantsResults({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: FavRestaurantResultsProps) {
  const [favRestaurants, setFavRestaurants] = useState([] as Restaurant[]);
  useEffect(() => {
    function checkUserData() {
      if (currentUser.fav_restaurants) {
        setFavRestaurants(currentUser.fav_restaurants);
        setSpinner(false);
      }
    }
    checkUserData();
  }, [currentUser]);

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }

  return (
    <>
      <h3>Favorite Restaurants</h3>
      <MulitpleResults
        restaurants={favRestaurants}
        currentUser={currentUser}
        currentUserTrigger={currentUserTrigger}
        setCurrentUserTrigger={setCurrentUserTrigger}
      ></MulitpleResults>
    </>
  );
}
