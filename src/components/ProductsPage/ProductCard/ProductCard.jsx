import React from "react";
import ProductImage from "./ProductImage/ProductImage";

import "./ProductCard.css";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductCard = ({ product }) => {
  const {id, name, price, image } = product;
  return (
    <div className="card">
      <ProductImage image={image} />
      <ProductDetails name={name} price={price} id={id}/>
    </div>
  );
};

export default ProductCard;
