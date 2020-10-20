import React from "react";

import "./Header.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import CartHeader from "./CartHeader/CartHeader";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <CartHeader />
    </header>
  );
};

export default Header;
