import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  filesData: { content: "" },
  files: {},
  error: null,
};

export const filesFetch = createAsyncThunk(
  "files/getFiles",
  async ({ files, id }) => {
    const request = files.map((file) =>
      fetch(file.raw_url)
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then((response) => response.text())
        .then((text) => {
          return { text, file };
        })
        .catch((error) => error)
    );
    return await Promise.all(request);
  }
);

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: {
    [filesFetch.pending.type]: (state) => {
      state.isLoading = true;
    },
    [filesFetch.fulfilled.type]: (state, action) => {
      state.files[action.meta.arg.id] = action.payload.map((file) => ({
        fileContent: file,
      }));
      state.isLoading = false;
      state.error = null;
    },
    [filesFetch.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filesSlice.reducer;
