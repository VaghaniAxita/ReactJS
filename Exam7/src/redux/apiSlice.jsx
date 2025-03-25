import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API fetching using createAsyncThunk
export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products"); // ✅ API with images
  return response.json();
});


const apiSlice = createSlice({
  name: "api",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
