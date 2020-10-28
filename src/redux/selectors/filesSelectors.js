import { createSelector } from "@reduxjs/toolkit";

export const getFiles = createSelector(
  (gist) => Object.values(gist.files),
  (files) => files
);

export const getFilesData = createSelector(
  (state) => state.files.filesData,
  (filesData) => filesData
);

export const getIsLoading = createSelector(
  (state) => state.files.isLoading,
  (isLoading) => isLoading
);

export const getFilesById = createSelector(
  (state, id) => state.files.files[id],
  (files) => files
);
