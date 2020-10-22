import React from "react";
import { Route, Switch } from "react-router-dom";
import CartPage from "../../CartPage/CartPage";
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
        <CartPage />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
