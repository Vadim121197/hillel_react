import { reducer as formReducer } from "redux-form";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  form: formReducer,
};

export const store = configureStore({
  reducer,
});
