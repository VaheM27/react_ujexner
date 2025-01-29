import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./api";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: {},
    errorMessage: "",
  },
  reducers: {
    getData(state, action) {
      return (state = action.payload);
    },
  },
  selectors: {
    getWeatherData: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.errorMessage = action.error.message;
    });
  },
});

export const dataReducer = dataSlice.reducer;
export const { getWeatherData } = dataSlice.selectors;
