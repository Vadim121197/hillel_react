import React from "react";

import "./Header.css";
import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";
import Navigations from "./Navigations/Navigations";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigations />
      <Cart />
    </header>
  );
};

export default Header;
