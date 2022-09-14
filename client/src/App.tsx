import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
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
          <Route path="login" element={<Login />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
