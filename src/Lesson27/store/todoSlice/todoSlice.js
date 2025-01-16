const ADD_TEXT = "add";
const REMOVE_TASK = "rem";

const initialState = {
  inputText: "",
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().getTime(),
            text: action.payload,
            isChecked: false,
          },
        ],
      };
    case REMOVE_TASK:
      return {
        todoList: [
          ...state.todoList.filter((elm) => {
            return elm.id !== action.payload;
          }),
        ],
      };
    default:
      return state;
  }
};

export const getText = (payload) => ({
  type: ADD_TEXT,
  payload,
});

export const removeTheTask = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
