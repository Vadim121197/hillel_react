import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../redux/actions/cartActions";

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

export default ProductDetails;
