import { createStore } from "redux";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_task":
      return [
        ...state,
        {
          id: new Date(),
          ...action.payload,
          checked: false,
          date: new Date().toDateString(),
        },
      ];
    case "set_checked":
      return state.map((task) => {
        return task.id === action.payload.id ? { ...action.payload } : task;
      });
    case "delete_task":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export const store = createStore(reducer);
