import React from "react";
import { useSelector } from "react-redux";
import ProductCardInCart from "./ProductCardInCart/ProductCardInCart";
import "./CartPage.css";
import SummaryPrice from "./ProductCardInCart/SummaryPrice/SummaryPrice";

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

  if (products.length === 0) return <div>You must by products</div>;

  return (
    <div className="cart__wrapper">
      {products.map((product) => (
        <ProductCardInCart product={product} key={product.foundProduct.id} />
      ))}
      <SummaryPrice products={products} />
    </div>
  );
};

export default CartPage;
