import React from "react";
import { Link } from "react-router-dom";
import NavbarStyled from "./NavbarStyles";

const Navbar = () => (
  <NavbarStyled>
    <Link to="/">Home</Link>
    <Link to="results">Results</Link>
    <Link to="review">Review</Link>
  </NavbarStyled>
);

export default Navbar;
