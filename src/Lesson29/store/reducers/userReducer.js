import { GET_USERS } from "../types/userTypes";
import { downloadData } from "../actions/usersActions";
import { Axios } from "../../api/api";

const initalState = [];

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const getAllUsersMiddleWare = () => {
  return (dispatch) => {
    Axios.getUsers().then((res) => {
      dispatch(downloadData(res.data.users));
    });
  };
};

export { userReducer };
