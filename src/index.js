import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store/createStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
