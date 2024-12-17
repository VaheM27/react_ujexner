import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import axios from "axios";

import "./Reg.css";

const Reg = () => {
    const [showPassword, setShowPassword] = useState(false);

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
        age: number()
            .min(18, 'You must be at least 18 years old')
            .required('Age is required'),
        password: string()
            .min(8, 'Password must be at least 8 characters long')
            .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
            .matches(/\d/, 'Password must include at least one number')
            .matches(/[@$!%*?&#]/, 'Password must include at least one special character')
            .required('Password is required'),
    });

    const initialValues = {
        username: "",
        email: "",
        number: "",
        address: "",
        age: "",
        password: ""
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const { data: existingUsers } = await axios.get("http://localhost:3001/users");

            const userExists = existingUsers.some(
                (user) => user.email === values.email || user.phone === values.number
            );

            if (userExists) {
                alert("Account already exists");
                return;
            }

            const response = await axios.post("http://localhost:3001/users", {
                id: nanoid(5),
                username: values.username,
                email: values.email,
                phone: values.number,
                address: values.address,
                age: values.age,
                password: values.password,
            });

            console.log("User registered successfully:", response.data);
            alert("Registration successful!");
            resetForm();
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Error registering user. Please try again.");
        }
    };

    return (
        <div className="registration-forms">
            <div className="registration-box">
                <h1>Register</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(
                        <Form>
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
                            <div className="form-field age">
                                <Field type="number" name="age" placeholder="Enter Your Age" />
                                <ErrorMessage name="age" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter Your Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="toggle-password-btn"
                                >
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>

                            <button className="submit-btn" type="submit">CREATE</button>
                            <Link to="/login">
                                <button className="regBtn">Back to Log In</button>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Reg;
