import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { register } from "../constants/data";

import "./RegForm.scss";

const RegForm = () => {
  const [data, setData] = useState([]);

  const initialValues = register.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});

  const validationSchema = object(
    register.reduce((acc, field) => {
      switch (field.name) {
        case "name":
        case "surname":
          acc[field.name] = string()
            .min(2, `${field.placeholder} must be at least 2 characters`)
            .max(50, `${field.placeholder} cannot exceed 50 characters`)
            .required(`${field.placeholder} is a required field`);
          break;

        case "address":
          acc[field.name] = string()
            .min(5, "Address must be at least 5 characters")
            .max(100, "Address cannot exceed 100 characters")
            .required("Address is a required field");
          break;

        case "address2":
          acc[field.name] = string()
            .min(5, "Address must be at least 5 characters")
            .max(100, "Address cannot exceed 100 characters");
          break;

        case "mobile":
          acc[field.name] = string()
            .matches(
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              "Invalid phone number"
            )
            .required("Mobile is a required field");
          break;

        case "email":
          acc[field.name] = string()
            .matches(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              "E-mail must be a valid email address"
            )
            .required("E-mail is a required field");
          break;

        case "userName":
          acc[field.name] = string()
            .matches(/^[a-z0-9_-]{6,15}$/)
            .min(6, "Username must be at least 6 characters")
            .max(15, "Username cannot exceed 15 characters")
            .required("Username is a required field");
          break;

        case "userPassword":
          acc[field.name] = string()
            .matches(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
              "Password must include at least one upper case English letter, one lower case English letter, one number and one special character"
            )
            .min(8, "Password must be at least 8 characters")
            .max(16, "Password cannot exceed 16 characters")
            .required("Password is a required field");
          break;

        default:
          break;
      }
      return acc;
    }, {})
  );

  function addUser(values, formikEvent) {
    const userData = register.reduce(
      (acc, user) => {
        acc[user.name] =
          user.name === "address2" && !values[user.name]
            ? "undefined"
            : values[user.name] || null;
        return acc;
      },
      { userID: uuid() }
    );

    setData([...data, userData]);
    formikEvent.resetForm();
  }

  console.log(data);

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikEvent) => {
          addUser(values, formikEvent);
        }}>
        <Form>
          <h1>Registration Form</h1>
          {register.map((input, index) => (
            <div key={index} className="field">
              <Field
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
              />
              <ErrorMessage
                name={input.name}
                component={input.component}
                className={input.className}
              />
            </div>
          ))}
          <button type="submit" className="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegForm;
