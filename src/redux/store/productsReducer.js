import { act } from "react-dom/test-utils";
import { initialState } from "../reducers/initialState";

export const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        default:
            return state
    }

}