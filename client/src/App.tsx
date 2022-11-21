import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp/SignUp";
import AdvancedSearch from "./pages/AdvancedSearch/AdvancedSearch";
import { Result } from "./pages/SearchResult/SearchResult";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Review from "./pages/Review/ReviewsList/SingleReview";
import ReviewsListParent from "./pages/Review/ReviewsList/ReviewsListParent";

import GlobalStyle from "./theme/globalStyle";
import { Navbar } from "./components/NavBar/NavBar";
import { SingleSearchResultPage } from "./pages/SearchResult/SingleSearchResult";
import "./App.css";

const App = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/user/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setCurrentUserEmail(content.username);
    })();
  });

  return (
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        <Navbar
          currentUserEmail={currentUserEmail}
          setCurrentUserEmail={setCurrentUserEmail}
        />
        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="advanced-search" element={<AdvancedSearch />} />
          <Route
            path="/results/:latitude/:longitude/:open_now/:radius"
            element={<Result />}
          />
          <Route
            path="/single-result/:place_id"
            element={<SingleSearchResultPage />}
          />
          <Route path="review" element={<Review />} />
          <Route path="reviews" element={<ReviewsListParent />} />
          <Route path="*" element={<NotFound />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="login"
            element={
              <Login
                currentUserEmail={currentUserEmail}
                setCurrentUserEmail={setCurrentUserEmail}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
