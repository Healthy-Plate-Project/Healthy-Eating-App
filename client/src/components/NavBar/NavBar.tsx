import React, { useState, useRef, useEffect } from "react";
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
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let startY: number;

    function handleTouchStart(event: TouchEvent) {
      startY = event.touches[0].clientY;
    }

    function handleTouchMove(event: TouchEvent) {
      const currentY = event.touches[0].clientY;
      const deltaY = startY - currentY;

      if (deltaY > 20) {
        setOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [navbarRef, setOpen]);

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
        <Link to="profile" onClick={() => setOpen(false)}>
          Profile
        </Link>
        <Link to="reviews" onClick={() => setOpen(false)}>
          Reviews
        </Link>
        <Link to="favorites" onClick={() => setOpen(false)}>
          Favorites
        </Link>
        <Link
          to="/"
          onClick={(e) => {
            logout(e);
            setOpen(false);
          }}
        >
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
      <NavbarStyled open={open} ref={navbarRef}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="advanced-search" onClick={() => setOpen(false)}>
          Advanced Search
        </Link>
        {loginLogoutButton}
      </NavbarStyled>
    </>
  );
}
