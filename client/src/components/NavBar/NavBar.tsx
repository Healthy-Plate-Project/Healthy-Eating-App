import React from "react";
import { Link } from "react-router-dom";
import { apiServer } from "../../utils/helpers";
import { NavbarStyled } from "./NavbarStyles";
import { NavButton } from "./NavButton";

import { UserData } from "../../utils/globalInterfaces";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Navbar({ currentUser, setCurrentUser }: any) {
  const [open, setOpen] = React.useState(false);
  async function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiServer()}/api/user/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content: UserData = await response.json();
      if (content.message === "Successfully logged out") {
        setCurrentUser({});
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  const loginLogoutButton = currentUser.username ? (
    <>
      <Link to="favorites">Favorites</Link>
      <Link to="/" onClick={(e) => logout(e)}>
        Logout
      </Link>
    </>
  ) : (
    <Link to="login" onClick={() => setOpen(!open)}>
      Login
    </Link>
  );
  return (
    <>
      <NavButton open={open} setOpen={setOpen} />
      <NavbarStyled open={open} onClick={() => setOpen(!open)}>
        <Link to="/">Home</Link>
        <Link to="advanced-search">Advanced Search</Link>
        <Link to="review">Review</Link>
        <Link to="reviews">Reviews</Link>
        {loginLogoutButton}
      </NavbarStyled>
    </>
  );
}
