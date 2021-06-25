import React from "react";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="login-out" to="/">
      Logout
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="signup-link" to="/signup">
      Sign Up
    </NavLink>
    <NavLink className="login-link" to="/login">
      Login
    </NavLink>
  </>
);

const Nav = (props) => {
  return (
    <div>
      <img src="https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg"></img>
      Ga<img src="https://static.thenounproject.com/png/197931-200.png"></img>me
      Station
      {props.user ? authenticatedOptions : unauthenticatedOptions}
      {props.user && <div>Welcome, {props.user.username}</div>}
    </div>
  );
};

export default Nav;
