import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const CartHeader = () => {
  const cartList = useSelector((state) => state.cart.cartList);

  const sum = useMemo(
    () =>
      cartList.reduce((accum, currentValue) => accum + currentValue.count, 0),
    [cartList]
  );
  return (
    <li className="nav_cart">
      <NavLink to="/cart">
        <Icon name="shopping cart" />
        <span>{sum}</span>
      </NavLink>
    </li>
  );
};

export default CartHeader;
