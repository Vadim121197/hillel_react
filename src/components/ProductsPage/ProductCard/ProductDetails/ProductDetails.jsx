import React from "react";

const ProductDetails = ({ name, price }) => {
  return (
    <div className="details">
      <div className="textContent">
        <h3>{name}</h3>
        <div className="price">{price} $</div>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
};

export default ProductDetails;
