import React from "react";
import { useSelector } from "react-redux";
import ProductCardInCart from "./ProductCardInCart/ProductCardInCart";
import "./CartPage.css";

const CartPage = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const productsList = useSelector((state) => state.products.productList);
  const products = cartList.map(({ id, count }) => {
    const foundProduct = productsList.find((product) => product.id === id);

    if (!foundProduct) return;
    return {
      foundProduct,
      count,
    };
  });

  return (
    <div className="cart__wrapper">
      {products.map((product) => (
        <ProductCardInCart product={product} key={product.foundProduct.id} />
      ))}
    </div>
  );
};

export default CartPage;
