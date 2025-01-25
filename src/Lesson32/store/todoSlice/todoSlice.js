import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    inputText: "",
    data: [],
    isChecked: false,
    draggable: false,
  },
  reducers: {
    getInputText(state, action) {
      return { ...state, inputText: action.payload };
    },
    makeTodoUsers(state, action) {
      return {
        data: [
          ...state.data,
          { id: new Date().getTime(), name: action.payload },
        ],
        inputText: "",
      };
    },
  },
  selectors: {
    getTodoText: (state) => state.inputText,
    getData: (state) => state.data,
    getIsChecked: (state) => state.isChecked,
    getIsDraggable: (state) => state.draggable,
  },
});

export const todoReducer = todoSlice.reducer;
export const { getInputText, makeTodoUsers } = todoSlice.actions;
export const { getTodoText, getData, getIsChecked, getIsDraggable } =
  todoSlice.selectors;
export const getFullState = (state) => state.todo;
