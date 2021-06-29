import React from "react";
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSignUp(formData);
      }}
    >
      <h3>Sign-Up</h3>
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
        <input type="text" name="email" value={email} onChange={handleChange} />
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
