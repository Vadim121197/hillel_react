import { applyMiddleware, compose, createStore } from "redux";
import { toLocalStorage } from "../middleware/toLocalStorage";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(toLocalStorage));

export const configureStore = () => createStore(rootReducer, enhancer);
