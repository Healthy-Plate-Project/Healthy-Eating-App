import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router";
import { getRestaurants, getRestaurant } from './utils/serverCalls';
import  { Home, Results }  from './pages'
import GlobalStyle from './theme/globalStyle';
import { Navbar } from './components';

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
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="results" element={<Results />}></Route>
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App;
