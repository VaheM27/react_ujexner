import { ADD_TODO, GET_INPUT_STATE } from "../types/todoTypes";

const initialState = {
  inputText: "",
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT_STATE:
      return {
        ...state,
        inputText: action.payload,
      };
    case ADD_TODO:
      return {
        inputText: "",
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            text: state.inputText,
            isChecked: false,
          },
        ],
      };
    default:
      return state;
  }
};

export { todoReducer };
