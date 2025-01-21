
import { ADD_USER, DELETE_USER, EDIT_USER } from "../Types/usersType";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    case EDIT_USER:
      return state;
    default:
      return state;
  }
};
export { usersReducer };
