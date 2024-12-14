import { ADD_COUNT, DECREMENT, INCREMENT, SORT } from "./actionTypes";

export const initialState = {
  data: [123, 456, 789],
  count: 0,
  users: ["Bgdo", "Ashot", "Karen"],
};

let order = true;

function sortedArray(data) {
  if (order) {
    order = false;
    return data.toSorted((a, b) => a.localeCompare(b));
  } else {
    order = true;
    return data.toSorted((a, b) => b.localeCompare(a));
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ADD_COUNT:
      return { ...state, data: [...state.data, action.payload] };
    case SORT:
      return { ...state, users: sortedArray(state.users) };
    default:
      return state;
  }
}

export default reducer;
