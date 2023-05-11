import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { API, apiCall } from "../../utils/serverCalls";
import { MulitpleResults } from "./MultipleResults";
import { Header } from "../../components/Header/Header";

type MulitpleSearchResultsPageProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};
export function MulitpleSearchResultsPage({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: MulitpleSearchResultsPageProps) {
  const {
    latitude,
    longitude,
    keyword,
    max_price,
    min_price,
    radius,
    open_now,
  } = useParams();
  const [restaurantsData, setRestaurantsData] = useState([] as Restaurant[]);

  useEffect(() => {
    async function fetchData() {
      try {
        const body = {
          latitude,
          longitude,
          keyword,
          max_price,
          min_price,
          radius,
          open_now,
        };
        const data = await apiCall(API.getRestaurants, body);
        const restaurants = data.map((restaurant: Restaurant) => restaurant);
        setRestaurantsData(restaurants);
        setSpinner(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }

  return (
    <>
      {Header()}
      <h3>Search Results</h3>
      <MulitpleResults
        restaurants={restaurantsData}
        currentUser={currentUser}
        currentUserTrigger={currentUserTrigger}
        setCurrentUserTrigger={setCurrentUserTrigger}
      ></MulitpleResults>
    </>
  );
}
