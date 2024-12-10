import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { register } from "../../constants/data";
import "./Registration.scss";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState("");

  const initialValues = register.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {});

  const validationSchema = object(
    register.reduce((acc, field) => {
      switch (field.name) {
        case "firstName":
        case "lastName":
          acc[field.name] = string()
            .min(2, `${field.placeholder} must be at least 2 characters`)
            .max(50, `${field.placeholder} cannot exceed 50 characters`)
            .required(`${field.placeholder} is a required field`);
          break;

        case "address":
          acc[field.name] = string()
            .min(5, "Address must be at least 5 characters")
            .max(100, "Address cannot exceed 100 characters")
            .required("Address is a required field");
          break;

        case "postalCode":
          acc[field.name] = string()
            .matches(/^\d{4,6}$/, "Postal code must be between 4 and 6 digits")
            .min(4, "Postal code must be at least 4 digits")
            .max(6, "Postal code cannot exceed 6 digits")
            .required("Postal code is a required field");
          break;

        case "country":
        case "city":
          acc[field.name] = string()
            .matches(
              /^[a-zA-Z\s\-]{2,50}$/,
              `${
                field.name.charAt(0).toUpperCase() + field.name.slice(1)
              } must be between 2 and 50 characters`
            )
            .min(
              2,
              `${
                field.name.charAt(0).toUpperCase() + field.name.slice(1)
              } must be at least 2 characters`
            )
            .max(
              50,
              `${
                field.name.charAt(0).toUpperCase() + field.name.slice(1)
              } cannot exceed 50 characters`
            )
            .required(
              `${
                field.name.charAt(0).toUpperCase() + field.name.slice(1)
              } is a required field`
            )
            .test(
              "capitalize",
              "Cities and countries starting with uppercase",
              (value) => {
                if (!value) return true;
                const words = value.split(" ");
                const formattedWords = words.map((word) => {
                  return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  );
                });
                return formattedWords.join(" ") === value;
              }
            );
          break;

        case "phone":
          acc[field.name] = string()
            .matches(
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              "Invalid phone number"
            )
            .required("Mobile is a required field");
          break;

        case "email":
          acc[field.name] = string()
            .matches(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              "E-mail must be a valid email address"
            )
            .required("E-mail is a required field");
          break;

        case "username":
          acc[field.name] = string()
            .matches(
              /^[a-zA-Z0-9_-]{6,15}$/,
              "Username must be in this format User-_123"
            )
            .min(6, "Username must be at least 6 characters")
            .max(15, "Username cannot exceed 15 characters")
            .required("Username is a required field");
          break;

        case "password":
          acc[field.name] = string()
            .matches(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
              "Invalid Password, Use A,a,1,-,_"
            )
            .min(8, "Password must be at least 8 characters")
            .max(16, "Password cannot exceed 16 characters")
            .required("Password is a required field");
          break;

        default:
          break;
      }
      return acc;
    }, {})
  );

  function createUser(values, formikEvent) {
    if (values.password !== values.password2) {
      setSuccess("Passwords do not match!");
      return;
    }

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((existingUsers) => {
        const usernameExists = existingUsers.some(
          (user) => user.username === values.username
        );
        if (usernameExists) {
          setSuccess("Username already exists!");
          return;
        }

        const address = {
          address: values.address || null,
          postalCode: values.postalCode || null,
          city: values.city || null,
          country: values.country || null,
        };

        const userData = register.reduce(
          (acc, user) => {
            if (
              ![
                "address",
                "postalCode",
                "city",
                "country",
                "password2",
              ].includes(user.name)
            ) {
              acc[user.name] = values[user.name] || null;
            }
            return acc;
          },
          {
            address,
          }
        );

        try {
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          formikEvent.resetForm();
          setData(userData);
          setSuccess("User created successfully!");
          navigate(`/registration/${userData.username}`, {
            state: { newUser: userData },
          });
        } catch (error) {
          setSuccess("An unexpected error occurred.");
        }
      })
      .catch((error) => {
        setSuccess("An error occurred while checking the username.");
      });
  }

  return (
    <main>
      <div className="container register">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, formikEvent) => {
            createUser(values, formikEvent);
          }}>
          <Form>
            <h1>Registration Form</h1>
            {success && <p className="success">{success}</p>}
            {register.map((input, index) => (
              <div key={index} className="field">
                <Field
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
                <ErrorMessage
                  name={input.name}
                  component={input.component}
                  className={input.className}
                />
              </div>
            ))}
            <button type="submit" className="submit">
              Create
            </button>
            <NavLink to="/">Back to Login</NavLink>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default Registration;
