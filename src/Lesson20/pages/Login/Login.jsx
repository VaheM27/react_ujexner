import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ROUTES from "../../Rountes";
import * as Yup from 'yup';
import axios from "axios";
import instance from "../../axios";
import Nav from "../../components/Nav/Nav";
import "./Login.css";


export const Login = () => {
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
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });


  const loginRequest = async (values) => {

      try {
        const response = await instance({
          method: "GET",
          params: {
            email: values.email,
          },
        });

        if (response.data.length > 0) {

          if (response.data[0].password != values.password) {
            setMessage("Password is wrong");
          }
          else {
            setMessage("");
            localStorage.setItem("authToken", response.token);
            localStorage.setItem("userID", response.data[0].id);
            navigate(ROUTES.PROFILE);
          }
        } else {
          setMessage("Email does not exist.");
        }
      }

      catch (error) {
        setMessage("This error:", error);
      }


  };

  return (
    <>
    <Nav />
    <div className='login_div'>
      <h1>Login</h1>
      <p>{message}</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={loginRequest}
      >
        {() => (
          <Form>
              <Field type="email" placeholder="Email" name="email" />
              <p><ErrorMessage name="email"/></p>
              <Field type="password" placeholder="Password" name="password" />
              <p><ErrorMessage name="password"/></p>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>

    </div>
    </>
    
  )
}