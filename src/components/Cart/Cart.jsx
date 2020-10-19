import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const productsList = useSelector((state) => state.products.productsList);

  const products = cartList.map(({ id, count }) => {
    const foundProduct = productsList.find((product) => product.id === id);
    if (!foundProduct) return;
    return {
      foundProduct,
      count,
    };
  });

  return (
    <>
      {products.map((el) => (
        <div>{el.count}</div>
      ))}
    </>
  );
};

export default Cart;
