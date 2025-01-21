import axios from "axios";
import { ADD_USER } from "../Types/usersType";

export const GetUsersMiddlwear = () => {
  return (dispatch) => {
    axios("https://api.escuelajs.co/api/v1/users").then((res) =>
      dispatch({ type: ADD_USER, payload: res.data })
    );
  };
};
