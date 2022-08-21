import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router";
import GlobalStyle from './theme/globalStyle';
import './App.css';
import { getRestaurants } from './utils/serverCalls';
import  { Home, Results }  from './pages'
import { Navbar } from "./components"

const App = () => {

  async function test() {
    const payload = {
      latitude: '40.4865496',
      longitude: '-111.9164662',
      radius: 20000,
      keyword: 'thai',
      maxPrice: 3,
      minPrice: 2,
      openNow: true,
    }
    return await getRestaurants(payload)
  }
  
  // console.log(test())
  
  return (
    <div className="App">
      <GlobalStyle/>
        <BrowserRouter>
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="results" element={<Results />}></Route>
            </Routes>
          <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App;
