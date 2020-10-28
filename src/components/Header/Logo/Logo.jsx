import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img
        className="logo"
        src="https://brandslogo.net/wp-content/uploads/2016/11/allegiant-air-logo-preview.png"
        alt="logo"
      />
    </NavLink>
  );
};

export default Logo;
