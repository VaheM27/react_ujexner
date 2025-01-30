import { configureStore } from "@reduxjs/toolkit";
import { weeklyDataReducer } from "./weeklyDataSlice/weeklyDataSlice";
import { dataReducer } from "./dataSlice/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    weeklyData: weeklyDataReducer,
  },
});

export default store;
