import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router";
import  { Home, Results, NotFound }  from './pages'
import GlobalStyle from './theme/globalStyle';
import { Navbar } from './components';

const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="results" element={<Results />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App;
