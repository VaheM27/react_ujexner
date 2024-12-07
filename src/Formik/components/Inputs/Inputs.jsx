import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";

import "./Inputs.css";

const sex = ["male", "female"];

const Inputs = () => {
  const initalValues = {
    userName: "",
    userSurename: "",
    userAge: "",
    userEmail: "",
    userPasportNumber: "",
    userZipCode: "",
    userAdress: "",
    userPhone: "",
    userSecondAdressPhone: "",
    registerButton: "Submit",
    userSex: "Choose your gender",
  };

  const validationSchema = object({
    userName: string()
      .min(4, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
    userSurename: string()
      .min(4, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
    userAge: number().required("Required"),
    userEmail: string().email("Invalid email").required("Required"),
    userPasportNumber: string().required("Required"),
    userZipCode: number().required("Required"),
    userAdress: string().required("Required"),
    userPhone: number().required("Required"),
    userSecondAdressPhone: number(),
  });
  return (
    <div>
      <Formik
        className="formik"
        initialValues={initalValues}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <Field
            className="field"
            name="userName"
            type="text"
            placeholder="Name"
          />
          <ErrorMessage name="userName" component="p" />
          <Field
            className="field"
            name="userSurename"
            type="text"
            placeholder="Surename"
          />
          <ErrorMessage name="userSurename" component="p" />
          <Field
            className="field"
            name="userAge"
            type="number"
            placeholder="Age"
          />
          <ErrorMessage name="userAge" component="p" />

          <Field
            className="field"
            name="userEmail"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="userEmail" component="p" />
          <Field
            className="field"
            name="userPasportNumber"
            type="password"
            placeholder="Pasport Number"
          />
          <ErrorMessage name="userPasportNumber" component="p" />
          <Field
            className="field"
            name="userZipCode"
            type="number"
            placeholder="Zip Code"
          />
          <ErrorMessage name="userZipCode" component="p" />
          <Field
            className="field"
            name="userAdress"
            type="text"
            placeholder="Adress"
          />
          <ErrorMessage name="userAdress" component="p" />
          <Field
            className="field"
            name="userPhone"
            type="number"
            placeholder="Phone"
          />
          <ErrorMessage name="userPhone" component="p" />
          <Field
            className="field"
            name="userSecondAdressPhone"
            type="number"
            placeholder="Second Adress Phone"
          />
          <ErrorMessage name="userSecondAdressPhone" component="p" />
          <Field
            className="registerButton"
            name="registerButton"
            type="submit"
          />
          <Field as="select" name="userSex" className="userSex">
            {sex.map((item, index) => (
              <>
                <option selected hidden>
                  Choose your gender
                </option>
                <option key={index} value={item}>
                  {item}
                </option>
              </>
            ))}
          </Field>
        </Form>
      </Formik>
    </div>
  );
};

export default Inputs;
