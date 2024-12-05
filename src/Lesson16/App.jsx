import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const options = ["Manager", "Admin", "User", "Moderator"];

  const initialValues = {
    userName: "",
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
    userPass: string().min(5).max(16).required("Password is a required field"),
    selectRole: string().required("Must be select one of list"),
  });

  function addUser(values, formikEvent) {
    const userData = {
      userID: nanoid(9),
      userName: values.userName,
      userPass: values.userPass,
      selectRole: values.selectRole,
    };
    console.log(values);
    console.log(formikEvent);
    setData([...data, userData]);
    formikEvent.resetForm();
  }

  //   function validatePass(value) {
  //     if (
  //       value.match(
  //         /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  //       )
  //     ) {
  //     } else {
  //       let errorMessage = "Sxal parola qyasar";
  //       return errorMessage;
  //     }
  //   }

  return (
    <div>
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
          <Field type="password" name="userPass" placeholder="Password" />
          <ErrorMessage
            component="div"
            name="userPass"
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

      <div className="usersBox">
        {data?.map((item) => {
          return (
            <Fragment key={item.userID}>
              <p>{item.userName}</p>
              <p>{item.userPass}</p>
              <p>{item.selectRole}</p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
