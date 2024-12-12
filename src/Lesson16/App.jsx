import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const options = ["Manager", "Admin", "User", "Moderator"];

  const initialValues = {
    userName: "",
    userEmail: "",
    phone: "",
    userPass: "",
    selectRole: "",
  };

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
    .min(8).max(22).required("Phone is a required field"),
    userPass: string().min(5).max(16).required("Password is a required field"),
    selectRole: string().required("Must be select one of list"),
  });

  function addUser(values, formikEvent) {
    const userData = {
      userID: nanoid(9),
      userName: values.userName,
      userEmail: values.userEmail,
      phone: values.phone,
      userPass: values.userPass,
      selectRole: values.selectRole,
    };
    setData([...data, userData]);
    formikEvent.resetForm();
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div className="main">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, formikEvent) => addUser(values, formikEvent)}
          setValues={initialValues}
        >
          <Form>
            <Field type="text" name="userName" placeholder="Username" />
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
            <Field type="password" name="userPass" placeholder="password" />
            <ErrorMessage
              component="div"
              name="password"
              className="errorMessage"
            />
            <Field as="select" name="selectRole">
              <option>Select your role</option>
              {options.map((item, index) => (
                <option value={item} name={item} key={index}>
                  {item}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="selectRole"
              component="div"
              className="errorMessage"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div className="bgimg">
          <img
            alt="map"
            src="https://originalmap.co.uk/wp-content/uploads/2019/08/World-Map-Board.jpg"
          />
        </div>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">password</th>
            <th scope="col">role</th>
          </tr>
        </thead>
        <tbody>
            {data?.map((item) => {
              return (
          <tr>
                <Fragment key={item.userID}>
                  <td>{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.phone}</td>
                  <td>{item.userPass}</td>
                  <td>{item.selectRole}</td>
                </Fragment>
          </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
