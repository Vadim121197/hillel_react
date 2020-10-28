import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gists from "../slices/gistsReducer";
import files from "../slices/filesReducer";
import logger from "redux-logger";
import users from "../slices/usersSlices";

const reducer = {
  gists,
  files,
  users,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
