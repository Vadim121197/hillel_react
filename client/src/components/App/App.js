import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { useRoutes } from "../../routes";
import "./App.css";
import Header from "./Header/Header";

const App = () => {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <div className="wrapper">
        <Router>
          {isAuthenticated ? (
            <>
              <Header />
            </>
          ) : null}
          {routes}
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
