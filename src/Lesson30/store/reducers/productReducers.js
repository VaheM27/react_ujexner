import { deleteData, editData, getData } from "../actions/productActions";
import {
  GET_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../types/productTypes";
import { Axios } from "../../api/api";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    case EDIT_PRODUCT:
      return action.payload;
    case DELETE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export const getProductsMiddleware = () => {
  return (dispatch) => {
    Axios.getProducts().then((res) => {
      dispatch(getData(res.data));
    });
  };
};

export const getOneProductMiddleware = (id) => {
  return (dispatch) => {
    Axios.getOneProduct(id).then((res) => {
      dispatch(getData(res.data));
    });
  };
};

export const editProductMiddleware = ({ id, price }) => {
  return async (dispatch) => {
    try {
      const res = await Axios.editPrice({ id, price });
      dispatch(editData(res.data));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
};

export const deleteProductMiddleware = (id) => {
  return (dispatch) => {
    Axios.deleteElement(id).then(() => {
      dispatch(deleteData(id));
    });
  };
};

export default productReducer;
