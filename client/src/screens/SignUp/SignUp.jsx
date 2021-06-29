import React from "react";
import "./SignUp.css";
import { useState } from "react";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profile_image_url: "",
  });

  const { username, email, password, profile_image_url } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-div">
      <form
        className="signup-form-container"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSignUp(formData);
        }}
      >
        <h3 id="signup-title">Sign-Up</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile picture link:
          <input
            type="text"
            name="profile_image_url"
            value={profile_image_url}
            onChange={handleChange}
          />
        </label>

        <button id="signup-button" type="submit">
          Submit
        </button>
        <a className="login-redirect" href="/login">
          Already have an account with Game Station? Click to here to login!
        </a>
      </form>
    </div>
  );
};

export default SignUp;
