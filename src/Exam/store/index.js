import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataSlice/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
