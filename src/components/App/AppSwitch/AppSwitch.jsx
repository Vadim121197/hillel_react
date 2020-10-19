import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../../Cart/Cart";
import ProductsPage from "../../ProductsPage/ProductsPage";

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/products">
        <ProductsPage />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
