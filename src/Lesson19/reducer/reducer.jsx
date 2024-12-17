import { nanoid } from "nanoid";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_DEVELOPER":
      return {
        ...state,
        developers: [
          ...state.developers,
          { id: nanoid(), name: action.payload },
        ],
      };
    case "SHUFFLE_ARRAY":
      return {
        ...state,
        arr: state.arr.sort(() => Math.random() - 0.5),
      };
    case "ADD_NUMBER":
      return { ...state, arr: [...state.arr, action.payload] };
    case "REMOVE_SINGLE_DIGITS":
      return {
        ...state,
        arr: state.arr.filter((num) => Math.abs(num) >= 10),
      };
    case "CHANGE_USER":
      return { ...state, user: { ...state.user, name: action.payload } };
    case "ADD_AGE":
      return {
        ...state,
        user: { ...state.user, age: state.user.age ? state.user.age + 1 : 1 },
      };
    default:
      return state;
  }
}

export default reducer;
