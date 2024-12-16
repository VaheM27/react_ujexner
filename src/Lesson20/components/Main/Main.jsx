import React, { useReducer } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { object, string } from "yup";

import "./Main.scss";

const Main = () => {
  const initialState = {
    data: [],
    user: {
      id: "",
      name: "",
    },
    developers: [],
  };

  const actionTypes = {
    ADD_DEV: "addDeveloper",
    SHUFFLE: "shuffle",
    ADD_NUM: "addNumber",
    REMOVE: "removeSingleDigits",
    CHANGE: "changeUser",
    ADD_AGE: "addAge",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_DEV:
        return { ...state, developers: [...state.developers, action.payload] };
      case actionTypes.SHUFFLE:
        return { ...state, data: [...state.data, action.payload] };
      case actionTypes.ADD_NUM:
        return { ...state, data: [...state.data, action.payload] };
      case actionTypes.REMOVE:
        return { ...state, data: [...state.data, action.payload] };
      case actionTypes.CHANGE:
        return { ...state, user: "Other" };
      case actionTypes.ADD_AGE:
        return {
          ...state,
          user: [...state.user, (state.user.age = Math.round(Math.random()))],
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const initialValues = {
    userName: "",
  };

  const validationSchema = object({
    userName: string().required(),
  });

  const addDeveloper = (e, f) => {
    dispatch({ type: actionTypes.ADD_DEV, payload: e.userName });
    f.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addDeveloper}
      >
        <Form>
          <Field name="userName" type="text" />
          <ErrorMessage name="userName" component={"p"} />
          <button type="submit">Add Developer</button>
          {/* <button onClick={dispatch({type: actionTypes.SHUFFLE, payload: })} >Shuffle Array</button> */}
          {/* <button
            onClick={dispatch({
              type: actionTypes.ADD_NUM,
              payload: 10,
            })}
          >
            Add Number
          </button> */}
          <button>Remove Single Digits</button>
          <button>Change User</button>
          <button>Add Age</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Main;
