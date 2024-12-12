import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import ROUTES from "../../Routes";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../axios";

import "./RegisterForm.scss";
import { nanoid } from "nanoid";

const RegisterForm = () => {
  const navigate = useNavigate();

  const submitSignUp = (details, formik) => {
    if (details.password !== details.confirmPassword) {
      alert("No");
    } else {
      const signUpData = {
        id: nanoid(3),
        fullName: details.fullName,
        name: details.userName,
        password: details.password,
      };

      instance({
        method: "POST",
        url: "users",
        data: signUpData,
      });

      navigate(ROUTES.LOGIN);
      formik.resetForm();
    }
  };

  const initialValues = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = object({
    fullName: string().required(),
    userName: string().required(),
    password: string().required(),
    confirmPassword: string().required(),
  });

  return (
    <div className="registerForm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e, f) => submitSignUp(e, f)}
      >
        <Form>
          <div className="inputDiv">
            <p>Full Name:</p>
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName" component={"p"} />
          </div>

          <div className="inputDiv">
            <p>Username:</p>
            <Field type="text" name="userName" />
            <ErrorMessage name="userName" component={"p"} />
          </div>

          <div className="inputDiv">
            <p>Password:</p>
            <Field type="text" name="password" />
            <ErrorMessage name="password" component={"p"} />
          </div>

          <div className="inputDiv">
            <p>Confirm Password:</p>
            <Field type="text" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component={"p"} />
          </div>

          <Field type="submit" name="submitBtn" value="Sign Up" />

          <div className="redirect">
            <p>Already Have an Account?</p>
            <Link to={ROUTES.LOGIN}>
              <button>Sign In</button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
