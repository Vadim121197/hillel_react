import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/createStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
