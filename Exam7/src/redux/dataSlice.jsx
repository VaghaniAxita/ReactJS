import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
  }
});

export default dataSlice.reducer;