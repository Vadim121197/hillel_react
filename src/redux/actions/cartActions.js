import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsType";

export const addProductToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
