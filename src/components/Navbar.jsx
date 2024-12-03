import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed">
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
            <NavLink to="/gameWatchList">Game WatchList</NavLink>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Chill Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allReview">All Review</NavLink>
        <NavLink to="/addReview">Add Review</NavLink>
        <NavLink to="/myReview">My Review</NavLink>
        <NavLink to="/gameWatchList">Game WatchList</NavLink>
      </div>
      <div className="navbar-end gap-5">
        <Link to="/login" className="">
          Log In
        </Link>
        <Link to="/register" className="">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
