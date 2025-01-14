import { combineReducers, createStore } from "redux";
import todoReducer from "./todoSlice/todoSlice";
import numberReducer from "./number/numberSlice";

// const initialState = {
//   number: 0,
//   data: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "inc":
//       return {
//         ...state,
//         number: state.number + action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const todoRecuder = (state = initialState, action) => {
//   return state;
// };

const reducers = combineReducers({
  // numberInc: reducer,
  todo: todoReducer,
  number: numberReducer,
});

const store = createStore(reducers);

export default store;
