import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import { Fragment, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  const initialValues = {
    userName: "",
    userEmail: "",
    phone: "",
    age: "",
  };
  function getData() {
    try {
      fetch("http://localhost:3000/users", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setUsersData(res));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const validationSchema = object({
    userName: string()
      .matches(
        /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
        "Username must be have uppercase,symbols,numbers"
      )
      .min(8, "Username lenght must be more than 4")
      .max(20, "Username lenght must be less than 13")
      .required("User is a required field"),
    userEmail: string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please sdkfc skdfn "
      )
      .min(8, "userEmail lenght must be more than 4")
      .max(20, "userEmail lenght must be less than 13")
      .required("userEmail is a required field"),
    phone: string()
      .matches(
        /^(?:\+?\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        "Please enter a valid phone number."
      )
      .min(8)
      .max(22)
      .required("Phone is a required field"),
      age: number().min(1).max(200).required("age is a required field"),
  });

  function addUser(values) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        userName: values.userName,
        userEmail: values.userEmail,
        phone: values.phone,
        age: values.age,
      }),
    })
    // formik.resetForm()
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div className="main">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => addUser(values)}
          setValues={initialValues}
        >
          <Form>
            <Field type="text" name="userName" placeholder="username" />
            <ErrorMessage
              component="div"
              name="userName"
              className="errorMessage"
            />
            <Field type="email" name="userEmail" placeholder="userEmail" />
            <ErrorMessage
              component="div"
              name="userEmail"
              className="errorMessage"
            />
            <Field type="text" name="phone" placeholder="phone" />
            <ErrorMessage
              component="div"
              name="phone"
              className="errorMessage"
            />
            <Field type="number" name="age" placeholder="age" />
            <ErrorMessage
              component="div"
              name="age"
              className="errorMessage"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">age</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item) => {
            return (
              <tr>
                <Fragment key={item.userID}>
                  <td>{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.phone}</td>
                  <td>{item.age}</td>
                </Fragment>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default App;
