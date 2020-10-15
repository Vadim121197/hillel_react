import { ADD_TO_CART } from "../actions/actionsType";
import { initialState } from "../state/state";

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    default:
      return state;
  }
};
