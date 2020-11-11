import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignInPage from "./components/Forms/SignInPage/SignInPage";
import SignUpPage from "./components/Forms/SignUpPage/SignUpPage";
import HomePage from "./components/HomePage/HomePage";
import CreateProductPage from "./components/ProductsPage/CreateProductPage/CreateProductPage";
import ProductPage from "./components/ProductsPage/ProductPage/ProductPage";
import ProductsPage from "./components/ProductsPage/ProductsPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/creators-products" exact>
          <CreateProductPage />
        </Route>
        <Route path="/products/:id" exact>
          <ProductPage />
        </Route>
        <Redirect to="/products" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/login">
        <SignInPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};
