import React from "react";
import { Link } from "react-router-dom";
import { convertMilesToMeters } from "../../utils/helpers";
import { getRestaurant, getRestaurants, saveRestaurant } from "../../utils/serverCalls";
import NavbarStyled from "./NavbarStyles";

const Navbar = () => {
  async function testAPICalls() {
    const getRestaurantsResults = await getRestaurants({
      latitude: '40.4865496',
      longitude: '-111.9164662',
      keyword: 'thai',
      maxPrice: 3,
      minPrice: 2,
      openNow: true,
      radius: convertMilesToMeters(10),
      // TODO: use this to setup pagination
      // pageToken: req.pageToken,
    })
    const getRestaurantResults = await getRestaurant(
      'ChIJn58N1B9gUocRpAXOXPbFcOo'
    )
    const saveRestaurantResults = await saveRestaurant({
      place_id: 'testID1',
      restaurantName: 'testName',
      longitude: 'testLong',
      latitude: 'testLat',
      photoReference: 'testPhoto',
    })
    console.log(getRestaurantsResults.results)
    console.log(getRestaurantResults.result)
    console.log(saveRestaurantResults)
  }
  return (
    <NavbarStyled>
      <Link to="/">Home</Link>
      <Link to="results">Results</Link>
      <button onClick={testAPICalls}>Test API Calls</button>
    </NavbarStyled>
  )
}

export default Navbar;
