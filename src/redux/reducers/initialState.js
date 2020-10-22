import { products } from "../../data/products";

export const initialState = {
  products: {
    productsList: products,
  },
  cart: {
    cartList: [],
  },
};
