import { products } from "../../data/products";

export const initialState = {
  products: {
    productList: [...products],
  },
  cart: {
    cartList: [],
  },
};
