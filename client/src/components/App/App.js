import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRoutes } from "../../routes";
import "./App.css";
const App = () => {
  const routes = useRoutes(false);
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="wrapper">
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
