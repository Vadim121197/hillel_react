import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  gistsData: [],
  error: null,
};

export const gistsFetch = createAsyncThunk("gists/getGists", () =>
  fetch("https://api.github.com/gists/public")
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .then((response) => response.json())
    .catch((error) => error)
);

const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {},
  extraReducers: {
    [gistsFetch.pending.type]: (state) => {
      state.isLoading = true;
    },
    [gistsFetch.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.gistsData = action.payload;
    },
    [gistsFetch.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gistsSlice.reducer;
