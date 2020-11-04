import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import SignInPage from "./components/Forms/SignInPage/SignInPage";
import SignUpPage from "./components/Forms/SignUpPage/SignUpPage";

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
        <SignInPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
