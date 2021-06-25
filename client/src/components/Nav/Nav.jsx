import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="login-out" to="/">
      Logout
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <div className="user-links">
    <NavLink className="signup-link" to="/signup">
      Sign Up
    </NavLink>
    <NavLink className="login-link" to="/login">
      Login
    </NavLink>
  </div>
);

const Nav = (props) => {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img
          className="home-icon"
          src="https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg"
        ></img>
      </NavLink>
      <div id="logo-div">
        Ga
        <img
          className="controller-M"
          src="https://static.thenounproject.com/png/197931-200.png"
        ></img>
        e Station
      </div>
      {props.user ? authenticatedOptions : unauthenticatedOptions}
      {props.user && <img src={props.user.imgURL} />}
    </div>
  );
};

export default Nav;
