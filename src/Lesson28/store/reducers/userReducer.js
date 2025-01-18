import { ADD_IMG, ADD_USER } from "../types/userTypes";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          srName: action.payload.srName,
          age: action.payload.age,
          photo: action.payload.photo,
        },
      ];
    default:
      return state;
  }
};

export default userReducer;
