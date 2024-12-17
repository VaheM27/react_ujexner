import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import axios from "axios";

import './logIn.css';

const LogIn = ({ setUserInfo }) => {
    const navigate = useNavigate();

    const validationSchema = object({
        username: string()
            .matches(/[A-Z]/, 'Username must include at least one uppercase letter')
            .required('Name is required'),

        email: string()
            .email('Invalid email')
            .required('Email is required'),

        number: string()
            .matches(/^\d+$/, 'Number must contain only digits')
            .min(6, 'Number must be at least 6 digits')
            .required('Phone number is required'),

        address: string()
            .required('Address is required'),
    });

    const initialValues = {
        username: "",
        email: "",
        number: "",
        address: ""
    };

    const handleSubmit = async (values) => {
        try {
            const { data: users } = await axios.get("http://localhost:3001/users");

            const user = users.find(
                (u) =>
                    u.username === values.username &&
                    u.email === values.email &&
                    u.phone === values.number &&
                    u.address === values.address
            );

            if (user) {
                setUserInfo(user); 
                navigate("/info");
            } else {
                alert("No user found with the provided details.");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            alert("Unable to log in. Please try again later.");
        }
    };

    return (
        <div className="Forms">
            <div className="FormsBox">
                <h1>Log In</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="form-field">
                                <Field type="text" name="username" placeholder="Enter Your Name" />
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </div>

                            <div className="form-field">
                                <Field type="email" name="email" placeholder="Enter Your E-Mail" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>

                            <div className="form-field">
                                <Field type="text" name="number" placeholder="Enter Your Phone Number" />
                                <ErrorMessage name="number" component="div" className="error-message" />
                            </div>

                            <div className="form-field">
                                <Field type="text" name="address" placeholder="Enter Your Address" />
                                <ErrorMessage name="address" component="div" className="error-message" />
                            </div>

                            <button className="logInBtn" type="submit">LOG IN</button>
                        </Form>
                    )}
                </Formik>
                <p>Or</p>
                <Link to="/register">
                    <button className="regBtn">Create New Account</button>
                </Link>
            </div>
        </div>
    );
};

export default LogIn;
