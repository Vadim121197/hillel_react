import { ADD_TO_CART } from "./actionsType"

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}