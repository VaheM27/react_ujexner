import { ADD_TEXT } from "../types/inputTypes";

export const getText = (payload) => ({
  type: ADD_TEXT,
  payload,
});
