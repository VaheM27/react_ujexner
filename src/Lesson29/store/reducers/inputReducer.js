import { ADD_TEXT, ERROR_CASE } from "../types/inputTypes";

const initialState = "Hello";

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return action.payload;
    case ERROR_CASE:
      return "Write smth";
    default:
      return state;
  }
};

export { inputReducer };
