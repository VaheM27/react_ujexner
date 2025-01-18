import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { addUsers } from "../../store/actions/userActions";
import { createUser } from "../../helpers/createUser";

import "./Register.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const initialValues = {
  //     fName: "",
  //     lName: "",
  //     age: "",
  //     photo: "",
  //   };

  return (
    <div className="register">
      <h1>Fill The Form!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            e.target[0].value &&
            e.target[1].value &&
            !isNaN(Number(e.target[2].value)) &&
            Number(e.target[2].value) > 0 &&
            Number(e.target[2].value) < 120
          ) {
            dispatch(addUsers(createUser(e)));
            e.target.reset();
            navigate("/dashboard");
          } else {
            alert("Please fill out all the fields in a correct way!");
          }
        }}
      >
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Age" />
        <label>
          Choose a file
          <input type="file" />
        </label>
        <input type="submit" value="Register" />
      </form>

      {/* <Formik
        initialValues={initialValues}
        className="formik"
        onSubmit={(e, form) => {
          dispatch(addUsers(createUser(e, form)));
          form.resetForm();
        }}
      >
        <Form className="mainForm">
          <div className="parent">
            <Field type="text" placeholder="First Name" name="fName" />
            <ErrorMessage className="error" name="fName" component="p" />
          </div>
          <div className="parent">
            <Field type="text" placeholder="Last Name" name="lName" />
            <ErrorMessage className="error" name="lName" component="p" />
          </div>
          <div className="parent">
            <Field type="text" placeholder="Age" name="age" />
            <ErrorMessage className="error" name="age" component="p" />
          </div>
          <div className="parent">
            <label>
              Choose image
              <Field type="file" name="photo" />
            </label>
            <ErrorMessage className="error" name="photo" component="p" />
          </div>
          <Field type="submit" value="Register" name="submit" />
        </Form>
      </Formik> */}
    </div>
  );
};

export default Register;
