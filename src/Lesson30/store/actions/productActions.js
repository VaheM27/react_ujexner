import {
  GET_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../types/productTypes";

export const getData = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const editData = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export const deleteData = () => ({
  type: DELETE_PRODUCT,
});
