import React from "react";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import "./ProductCardInCart.css";
import ProductImageInCart from "./ProductImageInCart/ProductImageInCart";
import ProductInfo from "./ProductInfo/ProductInfo";
import PropTypes from 'prop-types';

const ProductCardInCart = ({ product }) => {
  const summary = +product.foundProduct.price * product.count;

  return (
    <div className="card__cart">
      <ProductImageInCart image={product.foundProduct.image} />
      <ProductInfo
        name={product.foundProduct.name}
        price={product.foundProduct.price}
        count={product.count}
        summary={summary}
      />
      <ButtonGroup id={product.foundProduct.id}/>
    </div>
  );
};


ProductCardInCart.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductCardInCart;
