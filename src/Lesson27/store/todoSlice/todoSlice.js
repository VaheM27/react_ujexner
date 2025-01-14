const GET_TODO_TEXT = "get_text";
const MAKE_TODO = "make_todo";

const initialState = {
  inputText: "",
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_TEXT:
      return {
        ...state,
        inputText: action.payload,
      };
    case MAKE_TODO:
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

export const getText = (inputText) => ({
  type: GET_TODO_TEXT,
  payload: inputText,
});

export const makeTodo = () => ({ type: MAKE_TODO });

export default todoReducer;
