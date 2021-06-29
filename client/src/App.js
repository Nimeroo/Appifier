import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import GamesHome from "./screens/GamesHome/GamesHome";
import GamesComments from "./screens/GamesComments/GamesComments";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout user={currentUser} logout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route exact path="/">
            <GamesHome />
          </Route>
          <Route path="/:id">
            <GamesComments user={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
