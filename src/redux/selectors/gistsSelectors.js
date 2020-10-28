import { createSelector } from "@reduxjs/toolkit";

export const getGists = createSelector(
  (state) => state.gists.gistsData,
  (gistsData) => gistsData
);

export const getIsLoading = createSelector(
  (state) => state.gists.isLoading,
  (isLoading) => isLoading
);

export const getGistById = createSelector(
  getGists,
  (_, id) => id,
  (gistsData, id) => gistsData.find((gist) => gist.id === id)
);
