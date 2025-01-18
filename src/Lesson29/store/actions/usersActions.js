import { GET_USERS } from "../types/userTypes";

export const downloadData = (payload) => ({
  type: GET_USERS,
  payload,
});
