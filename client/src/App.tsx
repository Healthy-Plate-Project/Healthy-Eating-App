import React from 'react';
import './App.css';
import { getRestaurants } from './utils/serverCalls';
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
  
  // console.log(test())
  return (
    <div>
      <Home/>
      <Results/>
    </div>
    </>
  )
}

export default App;
