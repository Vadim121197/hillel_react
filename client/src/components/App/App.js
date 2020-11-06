import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "../../routes";
import "./App.css";
const App = () => {
  const routes = useRoutes(false);
 
  return (
    <div className="wrapper">
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
