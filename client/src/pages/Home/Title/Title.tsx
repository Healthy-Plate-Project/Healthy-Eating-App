import React from "react";
import { getRestaurant, getRestaurants, saveRestaurant } from "../../../utils/serverCalls";
import TitleStyled from "./TitleStyles";

function HomeTitle() {
  async function getRestaurantsTest() {
    const payload = {
      latitude: '40.4865496',
      longitude: '-111.9164662',
      radius: 50000,
      maxPrice: 3,
      minPrice: 2,
    }
    return await getRestaurants(payload)
  }

  async function getRestaurantTest() {
    const payload = 'ChIJn58N1B9gUocRpAXOXPbFcOo'
    return await getRestaurant(payload)
  }

  async function saveRestaurantTest() {
    const payload = {
      place_id: 'testID1',
      restaurantName: 'testName',
      longitude: 'testLong',
      latitude: 'testLat',
      photoReference: 'testPhoto',
      category: 'testCat'
    }
    return await saveRestaurant(payload)
  }
  return (
    <TitleStyled>
      Eat <br />
      Healthy
      <button onClick={() => {
        console.log(getRestaurantsTest())
        console.log(getRestaurantTest())
        console.log(saveRestaurantTest())
      }}>Test API Calls</button>
    </TitleStyled>
  );
}

export default HomeTitle;
