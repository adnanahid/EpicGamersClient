import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const [toggle, setToggle] = useState(
    () => JSON.parse(localStorage.getItem("theme")) ?? true
  );

  useEffect(() => {
    const theme = toggle ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(toggle));
  }, [toggle]);

  const handleSignOut = () => {
    userSignOut()
      .then(() => console.log("User signed out successfully"))
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <div className="navbar fixed mb-6 z-10 backdrop-blur-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allReview">All Review</NavLink>
            <NavLink to="/addReview">Add Review</NavLink>
            <NavLink to="/myReview">My Review</NavLink>
            <NavLink to="/wishList">WishList</NavLink>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Epic Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allReview">All Review</NavLink>
        {user && (
          <div className="lg:flex gap-5">
            <NavLink to="/addReview">Add Review</NavLink>
            <NavLink to="/myReview">My Review</NavLink>
            <NavLink to="/wishList">WishList</NavLink>
          </div>
        )}
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex gap-5 items-center">
            <Simple
              checked={toggle}
              onClick={() => setToggle(!toggle)}
              duration={750}
            />

            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
            <Tooltip id="my-tooltip" />
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName || "User"}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt={user?.displayName || "User Avatar"}
                className="lg:w-12 w-8 lg:h-12 h-8 rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Simple
              checked={toggle}
              onClick={() => setToggle(!toggle)}
              duration={750}
            />

            <Link to="/login" className="lg:px-4 lg:py-2 px-2 py-1 text-white">
              Login
            </Link>
            <Link
              to="/register"
              className="lg:px-4 lg:py-2 px-2 py-1 text-white"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
