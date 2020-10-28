import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import AppSwitch from "./AppSwitch/AppSwitch";
import "./App.css";


const App = () => {
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
