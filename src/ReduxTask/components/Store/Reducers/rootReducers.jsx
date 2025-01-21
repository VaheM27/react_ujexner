import { combineReducers } from "react-redux";
import { usersReducer } from "./usersReducer";
const reducers = combineReducers({
  users: usersReducer,
});
export default reducers;
