import { combineReducers } from "redux";
import productReducer from "./productReducers";

const reducers = combineReducers({
  products: productReducer,
});

export default reducers;
