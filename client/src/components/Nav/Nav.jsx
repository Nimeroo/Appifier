import React from "react";
import { Link } from "react";

const authenticatedOptions = (
  <>
    <Link className="login-out" to="/log-out">
      Sign Out
    </Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Link className="signup-link" to="/sign-up">
      Sign Up
    </Link>
    <Link className="login-link" to="/log-in">
      Login
    </Link>
  </>
);

const Nav = (props) => {
  return (
    <div>
      <img src="https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg"></img>
      Ga<img src="https://static.thenounproject.com/png/197931-200.png"></img>me
      Station
      {user ? authenticatedOptions : unauthenticatedOptions}
      {user && <div>Welcome, {props.user.username}</div>}
    </div>
  );
};

export default Nav;
