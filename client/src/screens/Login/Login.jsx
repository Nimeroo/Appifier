import "./Login.css";
import { useState, Link } from "react";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
        className="login-form-container"
      >
        <h4>Login</h4>
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
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <h5>New to Game Station? Click to here to sign up!</h5>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
