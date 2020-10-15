import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Cart = () => {
  return (
    <li className="nav_cart">
      <NavLink to="/cart">
        <Icon name="shopping cart" />
        <span>0</span>
      </NavLink>
    </li>
  );
};

export default Cart;
