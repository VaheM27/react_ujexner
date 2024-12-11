import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../Routes";
import instance from "../../axios";
import { nanoid } from "nanoid";

import "./LoginForm.scss";
import { useState } from "react";

const LoginForm = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = object({
    userName: string().required("Required Field"),
    password: string().required("Required Field"),
  });

  const checkLogin = (data, formik) => {
    const loginData = {
      id: nanoid(3),
      name: data.userName,
      password: data.password,
    };

    instance({
      url: "users",
      data: loginData,
    }).then((res) => setUserData(res.data));

    const correctUser = userData.find((item) => {
      return item.name === data.userName && item.password === data.password;
    });

    if (correctUser) {
      const profilePath = ROUTES.PROFILE.replace(":username", correctUser.name);
      navigate(`/${profilePath}`);
    } else {
      alert("Invalid username or password");
      return;
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e, f) => checkLogin(e, f)}
      >
        <Form>
          <div className="inputDiv">
            <p className="title">Username:</p>
            <Field type="text" name="userName" />
            <ErrorMessage name="userName" component={"p"} />
          </div>
          <div className="inputDiv">
            <p className="title">Password:</p>
            <Field type="text" name="password" />
            <ErrorMessage name="password" component={"p"} />
          </div>
          <Field type="submit" name="submitBtn" value="Log In" />
          <div className="redirect">
            <p>Don't Have an Account?</p>
            <Link to={ROUTES.REGISTER}>
              <button>Sign Up</button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
