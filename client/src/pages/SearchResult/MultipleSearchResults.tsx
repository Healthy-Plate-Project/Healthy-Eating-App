import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FullPageSpinner } from "../../components/Spinner/Spinner";
import { Restaurant, UserData } from "../../utils/globalInterfaces";
import { API, apiCall } from "../../utils/serverCalls";
import { MulitpleResults } from "./MultipleResults";

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
        const restaurants = data.map((restaurant: any) => {
          return {
            name: restaurant.name,
            place_id: restaurant.place_id,
            business_status: restaurant.business_status,
            geometry: {
              location: {
                lat: restaurant.geometry.location.lat,
                lng: restaurant.geometry.location.lng,
              },
            },
            opening_hours: restaurant.opening_hours,
            photos: restaurant.photos,
            price_level: restaurant.price_level,
            rating: restaurant.rating,
            types: restaurant.types,
            user_ratings_total: restaurant.user_ratings_total,
            vicinity: restaurant.vicinity,
          };
        });
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
    <MulitpleResults
      restaurants={restaurantsData}
      currentUser={currentUser}
      currentUserTrigger={currentUserTrigger}
      setCurrentUserTrigger={setCurrentUserTrigger}
    ></MulitpleResults>
  );
}
