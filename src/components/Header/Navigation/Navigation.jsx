import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gists">Gists</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
