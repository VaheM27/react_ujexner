import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { string, number, object } from "yup";

import "./Users.css";

export const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  const initalValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    adress: "",
  };

  const validationSchema = object({
    firstName: string("Write only String")
      .matches(/^[a-zA-Z]+$/, "Must be only letters")
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("Required")
      .trim()
      .strict(),
    lastName: string("Write only String")
      .matches(/^[a-zA-Z]+$/, "Must be only letters")
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("Required")
      .trim()
      .strict(),
    email: string("Write only String")
      .email("Invalid email")
      .trim()
      .required("Required"),
    age: number("Write only number")
      .min(18, "Too young")
      .max(100, "Too old")
      .required("Required"),

    phone: number("Write only number").required("Required"),
    adress: string("Write only String").required("Required"),
  });

  return (
    <div className="users">
      <Formik initialValues={initalValues} validationSchema={validationSchema}>
        <Form className="leftDiv">
          <Field type="text" name="firstName" placeholder="First Name" />
          <ErrorMessage component={"div"} name="firstName" />
          <Field type="text" name="lastName" placeholder="Last Name" />
          <ErrorMessage component={"div"} name="lastName" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage component={"div"} name="email" />
          <Field type="number" name="age" placeholder="Age" />
          <ErrorMessage component={"div"} name="age" />
          <Field type="number" name="phone" placeholder="Phone" />
          <ErrorMessage component={"div"} name="phone" />
          <Field type="text" name="adress" placeholder="Adress" />
          <ErrorMessage component={"div"} name="adress" />
        </Form>
      </Formik>
      <div className="rightDiv">
        {user.map((elm) => {
          return (
            <div key={elm?.id}>
              <p>{elm?.firstName}</p>
              <p>{elm?.lastName}</p>
              <p>{elm?.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
