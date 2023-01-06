import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiServer } from "../../utils/helpers";
import { NavbarStyled, ButtonWrapper } from "./NavbarStyles";
import { MenuButton } from "../../components/Button/ButtonStyles";
import { UserData } from "../../utils/globalInterfaces";

export function Navbar({ currentUser, setCurrentUser }: any) {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

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
    <Link to="login">Login</Link>
  );

  return (
    <NavbarStyled>
      <ButtonWrapper>
        <MenuButton
          className="menu-button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        ></MenuButton>
      </ButtonWrapper>
      <Link to="/">Home</Link>
      <Link to="advanced-search">Advanced Search</Link>
      <Link to="review">Review</Link>
      <Link to="reviews">Reviews</Link>
      {loginLogoutButton}
    </NavbarStyled>
  );
}
