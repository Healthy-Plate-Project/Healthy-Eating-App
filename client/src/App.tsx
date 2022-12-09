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

import { GlobalStyle } from "./theme/globalStyle";
import { Navbar } from "./components/NavBar/NavBar";
import { SingleSearchResultPage } from "./pages/SearchResult/SingleSearchResult";
import "./App.css";
import { apiServer } from "./utils/helpers";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiServer()}/api/user/get-user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const content = await response.json();
        setCurrentUser(content);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

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
            element={<SingleSearchResultPage currentUser={currentUser} />}
          />
          <Route
            path="review"
            element={<SingleReview currentUser={currentUser} />}
          />
          <Route
            path="reviews"
            element={<ReviewListParent currentUser={currentUser} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
