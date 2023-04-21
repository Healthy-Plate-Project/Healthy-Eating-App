import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarStyled } from "./NavbarStyles";
import { NavButton } from "./NavButton";

import { UserData } from "../../utils/globalInterfaces";
import { API, apiCall } from "../../utils/serverCalls";

type NavbarPageProps = {
  currentUser: UserData;
  setCurrentUser: any;
};

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Navbar({ currentUser, setCurrentUser }: NavbarPageProps) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  async function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    try {
      const data = await apiCall(API.logout, {}, true);
      if (data.message === "Successfully logged out") {
        setCurrentUser({});
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const loginLogoutButton =
    currentUser && currentUser.username ? (
      <>
        <Link to="profile">Profile</Link>
        <Link to="reviews">Reviews</Link>
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
        {loginLogoutButton}
      </NavbarStyled>
    </>
  );
}
