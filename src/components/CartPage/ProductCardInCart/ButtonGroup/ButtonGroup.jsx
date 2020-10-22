import React from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../../redux/actions/cartActions";
import PropTypes from "prop-types";

const ButtonGroup = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn__group">
      <button className="button" onClick={() => dispatch(addProductToCart(id))}>
        +
      </button>
      <button
        className="button"
        onClick={() => dispatch(removeProductFromCart(id))}
      >
        -
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ButtonGroup;
