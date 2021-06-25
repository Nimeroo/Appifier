import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import GamesHome from "./screens/GamesHome/GamesHome";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, verifyUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  };

  return (
    <div className="App">
      <Layout user={currentUser}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path="/">
            <GamesHome />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
