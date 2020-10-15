import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <nav>
      <ul className="nav__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
