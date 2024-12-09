import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { nanoid } from "nanoid";

import "./UserForm.scss";

const UserForm = ({ currentArr }) => {
  const [error, setError] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  };

  const validationSchema = object({
    firstName: string()
      .matches(
        /^(?=.*[A-Z])[A-Za-z]+([ '-][A-Za-z]+)*$/,
        "Please, provide correct first name!"
      )
      .required("Required Field"),
    lastName: string()
      .matches(
        /^(?=.*[A-Z])[A-Za-z]+([ '-][A-Za-z]+)*$/,
        "Please, provide correct last name!"
      )
      .required("Required Field"),
    email: string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
        "Please, provide a valid email!"
      )
      .required("Required Field"),
    image: string()
      .matches(
        /^(https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|webp|svg))(?:\?.*)?$/,
        "Please, Provide a correct image URL"
      )
      .required("Required Field"),
  });

  const addUser = (user, formik) => {
    if (currentArr.some((elm) => elm.email === user.email)) {
      setError("User already exists");
    } else {
      fetch("http://localhost:3005/users", {
        method: "POST",
        body: JSON.stringify({
          id: nanoid(4),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image,
        }),
      });
      formik.resetForm();
      setError("");
    }
  };

  return (
    <div className="form">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(e, formik) => addUser(e, formik)}
      >
        <Form>
          <div className="fieldDetails">
            <p className="title">First Name:</p>
            <Field name="firstName" placeholder="Mike" />
            <ErrorMessage className="error" component="p" name="firstName" />
          </div>
          <div className="fieldDetails">
            <p className="title">Last Name:</p>
            <Field name="lastName" placeholder="Tyson" />
            <ErrorMessage className="error" component="p" name="lastName" />
          </div>
          <div className="fieldDetails">
            <p className="title">Email:</p>
            <Field name="email" placeholder="miketyson777@mail.ru" />
            <ErrorMessage className="error" component="p" name="email" />
          </div>
          <div className="fieldDetails">
            <p className="title">Image URL:</p>
            <Field name="image" placeholder="example.com/image.webp" />
            <ErrorMessage className="error" component="p" name="image" />
          </div>
          <button type="submit">Register</button>
          {error && <p className="errorMessage">{error}</p>}{" "}
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
