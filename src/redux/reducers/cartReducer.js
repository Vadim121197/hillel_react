import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionsType";
import { initialState } from "./initialState";

initialState.cart.cartList = JSON.parse(
  localStorage.getItem("products") || "[]"
);

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const products = state.cartList.find(
        (product) => product.id === action.payload
      );

      if (!products) {
        return {
          ...state,
          cartList: [...state.cartList, { id: action.payload, count: 1 }],
        };
      }
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item === products ? { ...products, count: products.count + 1 } : item
        ),
      };
    }
    case REMOVE_FROM_CART:
      const products = state.cartList.find(
        (product) => product.id === action.payload
      );
      if (products.count === 1) {
        return {
          ...state,
          cartList: state.cartList.filter(
            (product) => product.id !== products.id
          ),
        };
      }
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item === products ? { ...products, count: products.count - 1 } : item
        ),
      };

    default:
      return state;
  }
};
