import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

import './ContactUs.css';

const ContactUs = () => {
    const [data, setData] = useState([]);

    const initialValues = {
        userName: "",
        userEmail: "",
        userNumber: "",
        message: ""
    }

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

        message: string()
    });

    function Registered(values, formikEvent) {
        const userData = {
            userName: values.userName,
            userEmail: values.userEmail,
            userNumber: values.userNumber,
            message: values.message
        }

        setData([...data, userData]);
        formikEvent.resetForm();
    }

    return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <div className="regAndMap">
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
                                
                                <Field as="textarea" name="message" placeholder="Message..." rows="4" />
                                {errors.message && touched.message && <div className="errorMessage">{errors.message}</div>}
                                
                                <button type="submit">SEND</button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="mapBox">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.396109965331!2d44.51634107652192!3d40.177997370134165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0022083bf1%3A0xa62331295e1f4f85!2sSmartcode!5e0!3m2!1sen!2sam!4v1733573527039!5m2!1sen!2sam"
                        width="600" 
                        height="450" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
