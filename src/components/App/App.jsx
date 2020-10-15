import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import AppSwitch from "./AppSwitch/AppSwitch";
import { useSelector } from "react-redux";

const App = () => {
  const store= useSelector((state) => state);
  console.log(store)
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <AppSwitch />
      </Router>
    </div>
  );
};

export default App;
