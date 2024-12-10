import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

import './formBox.css';

const FormBox = () => {
    const [data, setData] = useState([]);

    const initialValues = {
        userName: "",
        userEmail: "",
        userNumber: "",
        userAddress: "",
        userGender: ""
    };

    const validationSchema = object({
        userName: string()
            .matches(/^[^A-Z]*[A-Z][^A-Z]*$/, "Username must contain exactly one uppercase letter")
            .min(4, "Username must be at least 4 characters")
            .max(12, "Username cannot exceed 12 characters")
            .required("Username is required"),

        userEmail: string()
            .email("Invalid email address")
            .required("Email is required"),

        userNumber: string()
            .matches(/^[0-9]+$/, "Phone number must contain only numbers")
            .min(5, "Phone number must be at least 5 characters")
            .max(16, "Phone number cannot exceed 16 characters")
            .required("Phone number is required"),

        userAddress: string()
            .min(10, "Address must be at least 10 characters")
            .required("Address is required"),

        userGender: string()
            .oneOf(["male", "female", "other"], "Invalid gender selection")
            .required("Gender is required")
    });

    function Registered(values, formikEvent) {
        const userData = { ...values };
        setData([...data, userData]);
        formikEvent.resetForm();
    }

    return (
        <div className="formBox">
            <h1>Contact Us</h1>
            <div className="reg">
                <div className="regBox">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, formikEvent) => Registered(values, formikEvent)}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field type="text" placeholder="Name" name="userName" />
                                {errors.userName && touched.userName && <div className="errorMessage">{errors.userName}</div>}

                                <Field type="email" placeholder="Email" name="userEmail" />
                                {errors.userEmail && touched.userEmail && <div className="errorMessage">{errors.userEmail}</div>}

                                <Field type="text" placeholder="Phone Number" name="userNumber" />
                                {errors.userNumber && touched.userNumber && <div className="errorMessage">{errors.userNumber}</div>}

                                <Field type="text" placeholder="Address" name="userAddress" />
                                {errors.userAddress && touched.userAddress && <div className="errorMessage">{errors.userAddress}</div>}

                                <div className="gender">
                                    <label>
                                        <Field type="radio" name="userGender" value="male" />
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="userGender" value="female" />
                                        Female
                                    </label>
                                </div>
                                {errors.userGender && touched.userGender && <div className="errorMessage">{errors.userGender}</div>}
                                <button type="submit">SEND</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default FormBox;
