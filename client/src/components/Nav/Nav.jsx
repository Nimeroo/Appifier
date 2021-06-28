import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const authenticatedOptions = (
    <>
      <button onClick={props.logout} className="links" id="logout">
        Logout
      </button>
    </>
  );

  const unauthenticatedOptions = (
    <div className="user-links">
      <NavLink className="links" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="links" to="/login">
        Login
      </NavLink>
    </div>
  );

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
      <div className="nav-user-info">
        {props.user ? authenticatedOptions : unauthenticatedOptions}
        {props.user && (
          <img id="nav-profile-pic" src={props.user.profile_image_url} />
        )}
      </div>
    </div>
  );
};

export default Nav;
