import { LOGIN, REGISTER } from "./actionTypes";

export const initialState = {
  data: [123, 456, 789],
  count: 0,
  users: ["Bgdo", "Ashot", "Karen"],
};

// let order = true;

// function sortedArray(data) {
//   if (order) {
//     order = false;
//     return data.toSorted((a, b) => a.localeCompare(b));
//   } else {
//     order = true;
//     return data.toSorted((a, b) => b.localeCompare(a));
//   }
// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
}

export default reducer;
