import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionsType";

export const toLocalStorage = (store) => (next) => (action) => {
  if ([ADD_TO_CART, REMOVE_FROM_CART].includes(action.type)) {
    next(action);
    const state = store.getState();
    try {
      localStorage.setItem("products", JSON.stringify(state.cart.cartList));
    } catch (e) {
      console.log(e);
    }
  }
};
