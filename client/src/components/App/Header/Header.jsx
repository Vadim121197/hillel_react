import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const auth = useContext(AuthContext);

  const logOutHandler = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <Menu inverted>
      <NavLink to="/">
        <Menu.Item name="Home" />
      </NavLink>
      <NavLink to="/products">
        <Menu.Item name="products" />
      </NavLink>
      <Menu.Item position="right">
        <Button primary onClick={logOutHandler}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
