import React from 'react';
import './App.css';
import { getRestaurant, getRestaurants } from './utils/serverCalls';
import  { Home, Results }  from './pages'

const App = () => {

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

  console.log(getRestaurantsTest())
  console.log(getRestaurantTest())
  
  return (
    <div>
      <Home/>
      <Results/>
    </div>
  )
}

export default App;
