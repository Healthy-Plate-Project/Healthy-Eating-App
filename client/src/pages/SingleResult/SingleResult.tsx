import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../utils/serverCalls";

interface SingleRestaurant {
  // add each piece of data and the type from the restaurantData object that
  // you want to use, the name of each type has to match the name in the data exactly
  formatted_address: string;
}

export function SingleResultPage() {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState({} as SingleRestaurant);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id]);

  // look at this object in the console to see what data is available to use
  console.log(restaurantData);

  return (
    <>
      <p>{restaurantData.formatted_address}</p>
    </>
  );
}
