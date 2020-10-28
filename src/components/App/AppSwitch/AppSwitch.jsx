import React from "react";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import GistsPage from "../../GistsPage/GistsPage";
import UserPage from "../../UserPage/UserPage";

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route path="/gists">
        <GistsPage />
      </Route>
      <Route path="/author/:id">
        <UserPage />
      </Route>
      <Route path="*">Not Found</Route>
    </Switch>
  );
};

export default AppSwitch;
