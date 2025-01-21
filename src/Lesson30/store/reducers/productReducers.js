import axios from "axios";
import { getData } from "../actions/productActions";
import {
  GET_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../types/productTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export const getProductsMiddleware = () => {
  return (dispatch) => {
    axios({
      baseURL: "https://api.escuelajs.co/api/v1/products",
      method: "GET",
    }).then((res) => {
      dispatch(getData(res.data));
    });
  };
};

export default productReducer;
