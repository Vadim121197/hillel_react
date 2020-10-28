import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: {},
  error: null,
};

export const usersFetch = createAsyncThunk("users/getUsers", async ({ id }) => {
  const req = fetch(`https://api.github.com/user/${id}`)
    // .then((response) => {
    //   if (response.status !== 200) {
    //     return Promise.reject(new Error(response.statusText));
    //   }
    //   return Promise.resolve(response);
    // })
    .then((response) => response.json())
    .catch((error) => error);
  return await Promise.resolve(req);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [usersFetch.pending.type]: (state) => {
      state.isLoading = true;
    },
    [usersFetch.fulfilled]: (state, action) => {
      state.users[action.meta.arg.id] = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [usersFetch.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
