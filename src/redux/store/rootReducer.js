import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import { productsReducer } from "../reducers/productsReducer";


export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})
