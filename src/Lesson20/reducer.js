import { ACTION } from "./actionTypes";
import { v4 as uuid } from "uuid";

export const initialState = {
  developer: [],
  user: {
    id: null,
    name: "",
  },
  arr: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.ADD_DEVELOPER:
      return { ...state, developer: [...state.developer, action.payload] };
    case ACTION.SHUFFLE_ARRAY:
      return {
        ...state,
        arr: [...state.arr].sort(() => Math.random() - 0.5),
        developer: [...state.developer].sort(() => Math.random() - 0.5),
      };
    case ACTION.ADD_NUMBER:
      return { ...state, arr: [...state.arr, action.payload] };
    case ACTION.REMOVE_SINGLE_DIGITS:
      return { ...state, arr: state.arr.filter((num) => Math.abs(num) > 9) };
    case ACTION.CHANGE_USER:
      return {
        ...state,
        user: { ...state.user, id: uuid().substr(2, 4), name: action.payload },
      };
    case ACTION.ADD_AGE:
      return { ...state, user: { ...state.user, age: action.payload } };
    default:
      return state;
  }
}
