import { createSlice } from "@reduxjs/toolkit";
import { fetchWeeklyData } from "./api";

const weeklyDataSlice = createSlice({
  name: "weeklyData",
  initialState: {
    loading: false,
    weeklyData: [],
    errorMessage: "",
  },
  reducers: {
    getData(state, action) {
      return (state = action.payload);
    },
  },
  selectors: {
    getWeekData: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeeklyData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeeklyData.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMessage = "";
      state.weeklyData = action.payload;
    });
    builder.addCase(fetchWeeklyData.rejected, (state, action) => {
      state.loading = false;
      state.weeklyData = [];
      state.errorMessage = action.error.message;
    });
  },
});

export const weeklyDataReducer = weeklyDataSlice.reducer;
export const { getWeekData } = weeklyDataSlice.selectors;
