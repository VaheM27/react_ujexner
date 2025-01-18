import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/rootReducer";

import { thunk } from "redux-thunk";
import { ADD_TEXT, ERROR_CASE } from "./types/inputTypes";

export const handleEmptyState = (state) => (next) => (action) => {
  const dispatch = state.dispatch;

  if (action.type === ADD_TEXT && !action.payload.trim()) {
    return dispatch({ type: ERROR_CASE });
  }
  next(action);
};

const store = createStore(reducer, applyMiddleware(thunk, handleEmptyState));

export default store;
