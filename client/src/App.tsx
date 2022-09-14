import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router";
import {
  Home,
  Results,
  NotFound,
  Login,
  Review,
  ReviewsListParent,
} from "./pages";
import GlobalStyle from "./theme/globalStyle";
import { Navbar } from "./components";

const App = () => {

  const [currentUserEmail, setCurrentUserEmail] = useState('');
  useEffect(() => {
    (
      async () => {
        const response = await fetch("/api/user/user", {
          headers: { "Content-Type": "application/json" },
          credentials: 'include'
        });
        const content = await response.json();
        setCurrentUserEmail(content.username);
      }
    )();
  });

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="review" element={<Review />} />
          <Route path="reviews" element={<ReviewsListParent />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login currentUserEmail={currentUserEmail} setCurrentUserEmail={setCurrentUserEmail} />} />
        </Routes>
        <Navbar currentUserEmail={currentUserEmail} setCurrentUserEmail={setCurrentUserEmail} />
      </BrowserRouter>
    </div>
  );
};

export default App;
