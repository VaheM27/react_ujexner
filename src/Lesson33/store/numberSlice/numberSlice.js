import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: 0,
  reducers: {
    incrementNum(state) {
      return state + 1;
    },
  },
  selectors: {
    getNum: (state) => state,
  },
});

export const numberReducer = numberSlice.reducer;
export const { incrementNum } = numberSlice.actions;
export const { getNum } = numberSlice.selectors;
