import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router";
import { Home, Results, NotFound, Login, SignUp } from './pages'
import GlobalStyle from './theme/globalStyle';
import { Navbar } from './components';

const App = () => {


  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App;
