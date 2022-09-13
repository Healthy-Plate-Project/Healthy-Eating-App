import React from "react";
import { Link } from "react-router-dom";
import NavbarStyled from "./NavbarStyles";

export function Navbar(props: any) {

  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    });
    props.setCurrentUserEmail('');
  }

  return (
    <NavbarStyled>
      <Link to="/">Home</Link>
      <Link to="results">Results</Link>
    </NavbarStyled>
  )
}
