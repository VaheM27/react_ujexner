// import React from "react";
// import {
//   ADD_DEV,
//   SHUFFLE,
//   ADD_NUM,
//   REMOVE,
//   CHANGE,
//   ADD_AGE,
// } from "./actionTypes";

// export const initialValues = {
//   data: [],
//   user: {
//     id: "",
//     name: "",
//   },
//   developers: [],
// };

// const reducer = (state = initialValues, action) => {
//   switch (action.type) {
//     case ADD_DEV:
//       return { ...state, developers: [...state.developers, action.payload] };
//     case SHUFFLE:
//       return { ...state, data: [...state.data, action.payload] };
//     case ADD_NUM:
//       return { ...state, data: [...state.data, action.payload] };
//     case REMOVE:
//       return { ...state, data: [...state.data, action.payload] };
//     case CHANGE:
//       return { ...state, user: "Other" };
//     case ADD_AGE:
//       return {
//         ...state,
//         user: [...state.user, (age = Math.round(Math.random()))],
//       };
//   }
// };

// export default reducer;

