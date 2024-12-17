import React from 'react';
import Nav from "../../components/Nav/Nav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../Rountes";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import instance from "../../axios";
import { nanoid } from "nanoid";
import "./Register.css";


export const Register = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const checklogin = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      checklogin(ROUTES.PROFILE);
    }
  }, [token, checklogin]);


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    firstName: Yup.string()
      .required('FirstName is required'),
    lastName: Yup.string()
      .required('LastName is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    cpassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password is required'),
  });

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    cpassword: "",
  };


  //   const checkEmailExists = async (inputedemail) => {

  // };


  const addUser = async (values, formikEvent) => {
    try {
      const response = await instance({
        method: "GET",
        params: {
          email: values.email,
        },
      });

      if (response.data.length > 0) {
        setMessage("Email is already exists");
      } else {
        try {
          const response = await instance({
            method: "POST",
            data: {
              id: nanoid(9),
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              password: values.password,
            }
          });

          if (response.data) {
            setMessage("");
            localStorage.setItem("authToken", response.token);
            localStorage.setItem("userID", response.data.id);
            navigate(ROUTES.PROFILE);
          } else {
            setMessage("Something went wrong.");
          }
        }

        catch (error) {
          setMessage("This error:", error);
        }

        formikEvent.resetForm();
      }
    }

    catch (error) {
      setMessage("This error:", error);
    }
  };


  return (
    <>
      <Nav />
      <div className='register_div'>
        <h1>Register</h1>
        <p>{message}</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, formikEvent) => addUser(values, formikEvent)}
        >
          {() => (
            <Form>
              <Field type="email" placeholder="Email" name="email" />
              <p><ErrorMessage name="email" /></p>
              <Field type="text" placeholder="First Name" name="firstName" />
              <p><ErrorMessage name="firstName" /></p>
              <Field type="text" placeholder="Last Name" name="lastName" />
              <p><ErrorMessage name="lastName" /></p>
              <Field type="password" placeholder="Password" name="password" />
              <p><ErrorMessage name="password" /></p>
              <Field type="password" placeholder="Confirm Password" name="cpassword" />
              <p><ErrorMessage name="cpassword" /></p>
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>

      </div>
    </>
  )
}