import { createSelector } from "@reduxjs/toolkit";

export const getUserById = createSelector(
  (state, id) => state.users.users[id],
  (user) => user
);

export const getIsLoading = createSelector(
  (state) => state.users.isLoading,
  (isLoading) => isLoading
);
