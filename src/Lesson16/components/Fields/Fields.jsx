import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { object, string } from "yup";

import "./Fields.scss";

const Fields = ({ addData }) => {
  const initial = {
    fullName: "",
    passport: "",
    zipCode: "",
    email: "",
    phone: "",
    address: "",
    secondAddress: "",
    submitForm: "Submit Form",
  };

  const getData = (values, formikEvents) => {
    const user = {
      userId: nanoid(10),
      fullName: values.fullName,
      passport: values.passport,
      zipCode: values.zipCode,
      email: values.email,
      phone: values.phone,
      address: values.address,
      secondAddress: values?.secondAddress,
    };
    addData((prevData) => {
      const isUserExist = prevData.some(
        (item) =>
          item.passport === user.passport ||
          item.phone === user.phone ||
          item.email === user.email
      );

      if (isUserExist) {
        alert("Existing user!");
        formikEvents.resetForm();
        return prevData;
      } else {
        return [...prevData, user];
      }
    });
    formikEvents.resetForm();
  };

  const validation = object({
    fullName: string()
      .matches(
        /^[A-Z][a-z]+ [A-Z][a-z]+$/,
        "Full Name must contain First Name and Last Name."
      )
      .min(6)
      .max(20)
      .required("Full Name is required."),
    passport: string()
      .matches(/^\d{8}$/, "Passport must be exactly 8 digits.")
      .required("Passport ID is required."),
    zipCode: string()
      .matches(/^\d{4}$/, "Zip Code must be exactly 4 digits.")
      .required("Zip Code is required."),
    email: string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Provide Valid Email."
      )
      .required("Email is required."),
    phone: string()
      .matches(/^\+374\d{8}$/, "Provide a valid phone number.")
      .required("Phone number is required."),
    address: string()
      .matches(
        /^[A-Za-z\s]+,\s[A-Za-z0-9\s]+,\s\d+$/,
        'Address should be in this Format "City, street, number"'
      )
      .required("Address is required."),
    secondAddress: string().matches(
      /^[A-Za-z\s]+,\s[A-Za-z0-9\s]+,\s\d+$/,
      'Address should be in this Format "City, street, number"'
    ),
  });

  return (
    <div className="form">
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, formik) => getData(values, formik)}
      >
        <Form>
          <div className="parent">
            <Field placeholder="Name Surname*" type="text" name="fullName" />
            <ErrorMessage className="error" name="fullName" component="p" />
          </div>
          <div className="parent">
            {" "}
            <Field placeholder="Passport Id*" type="text" name="passport" />
            <ErrorMessage className="error" name="passport" component="p" />
          </div>
          <div className="parent">
            {" "}
            <Field placeholder="Zip Code*" type="text" name="zipCode" />
            <ErrorMessage className="error" name="zipCode" component="p" />
          </div>
          <div className="parent">
            <Field placeholder="Email*" type="text" name="email" />
            <ErrorMessage className="error" name="email" component="p" />
          </div>
          <div className="parent">
            <Field placeholder="Phone*" type="text" name="phone" />
            <ErrorMessage className="error" name="phone" component="p" />
          </div>
          <div className="parent">
            {" "}
            <Field placeholder="Address 1*" type="text" name="address" />
            <ErrorMessage className="error" name="address" component="p" />
          </div>
          <div className="parent">
            <Field
              placeholder="Address 2 (optional)"
              type="text"
              name="secondAddress"
            />
            <ErrorMessage
              className="error"
              name="secondAddress"
              component="p"
            />
          </div>

          <Field type="submit" name="submitForm" />
        </Form>
      </Formik>
    </div>
  );
};

export default Fields;
