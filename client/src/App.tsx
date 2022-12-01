import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import {
  Home,
  AdvancedSearch,
  Result,
  NotFound,
  Login,
  Review,
  ReviewsListParent,
  SignUp,
} from "./pages";
import GlobalStyle from "./theme/globalStyle";
import { Navbar, RestaurantsResults } from "./components";
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
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
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
          <Route
            path="/multiple-results/:latitude/:longitude/:keyword/:min_price/:max_price/:radius/:open_now"
            element={<RestaurantsResults />}
          />
        </Routes>
        <Navbar
          currentUserEmail={currentUserEmail}
          setCurrentUserEmail={setCurrentUserEmail}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
