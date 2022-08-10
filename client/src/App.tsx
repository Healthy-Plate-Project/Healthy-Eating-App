import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getRestaurants } from './utils/serverCalls';

function App() {

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
