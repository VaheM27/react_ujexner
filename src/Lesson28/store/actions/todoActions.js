import { ADD_TODO, GET_INPUT_STATE } from "../types/todoTypes";

export const getText = (payload) => ({
  type: GET_INPUT_STATE,
  payload,
});

export const makeTodo = () => ({ type: ADD_TODO });
