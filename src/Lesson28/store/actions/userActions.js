import { ADD_USER } from "../types/userTypes";

export const addUsers = (payload) => ({
  type: ADD_USER,
  payload,
});
