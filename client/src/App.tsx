import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { AdvancedSearch } from "./pages/AdvancedSearch/AdvancedSearch";
import { Result } from "./pages/SearchResult/SearchResult";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { SingleReview } from "./pages/Review/ReviewsList/SingleReview";
import { ReviewListParent } from "./pages/Review/ReviewsList/ReviewsListParent";
import { RestaurantsResults } from "./components/RestaurantsResults/RestaurantsResults";

import { GlobalStyle } from "./theme/globalStyle";
import { Navbar } from "./components/NavBar/NavBar";
import {
  FavRestaurantData,
  SingleSearchResultPage,
} from "./pages/SearchResult/SingleSearchResult";
import "./App.css";
import { apiServer } from "./utils/helpers";
import { FavRestaurantsResults } from "./components/FavoriteRestaurantsResults/FavoriteRestaurantsResults";

export interface UserData {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  message?: string;
  fav_restaurants?: [FavRestaurantData];
}

export default function App() {
  const [currentUser, setCurrentUser] = useState({} as UserData);
  const [currentUserTrigger, setCurrentUserTrigger] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiServer()}/api/user/get-user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const content: UserData = await response.json();
        setCurrentUser(content);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [currentUserTrigger]);

  return (
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="advanced-search" element={<AdvancedSearch />} />
          <Route
            path="/results/:latitude/:longitude/:open_now/:radius"
            element={<Result currentUser={currentUser} />}
          />
          <Route
            path="/single-result/:place_id"
            element={
              <SingleSearchResultPage
                currentUser={currentUser}
                currentUserTrigger={currentUserTrigger}
                setCurrentUserTrigger={setCurrentUserTrigger}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="sign-up"
            element={<SignUp setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/multiple-results/:latitude/:longitude/:keyword/:min_price/:max_price/:radius/:open_now"
            element={<RestaurantsResults />}
          />
          <Route
            path="/fav-results/:userId"
            element={<FavRestaurantsResults />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
