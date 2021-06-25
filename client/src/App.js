import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { loginUser, verifyUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  };

  return (
    <div ClassName="App">
      <Layout user={verifyUser}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
