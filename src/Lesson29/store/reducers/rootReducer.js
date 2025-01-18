import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { inputReducer } from "./inputReducer";

const reducer = combineReducers({
  users: userReducer,
  input: inputReducer,
});

export default reducer;
