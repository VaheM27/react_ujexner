import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataSlice/dataSlice";
import { numberReducer } from "./numberSlice/numberSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    number: numberReducer,
  },
});

export default store;
