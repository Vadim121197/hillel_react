import React from "react";

import PropTypes from "prop-types";
import { addProductToCart } from "../../../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductDetails = ({ id, name, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="details">
      <div className="textContent">
        <h3>{name}</h3>
        <div className="price">{price} $</div>
      </div>

      <button onClick={() => dispatch(addProductToCart(id))}>
        ADD TO CART
      </button>
    </div>
  );
};

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
