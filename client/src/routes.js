import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import AuthPage from "./components/Forms/AuthPage/AuthPage";
import LoginPage from "./components/Forms/LoginPage/LoginPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/details" exact>
          <DetailsPage />
        </Route>
        <Redirect to="/details" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <AuthPage />
      </Route>
      <Route exact path="/signin">
        <LoginPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
