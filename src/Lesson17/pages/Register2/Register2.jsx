import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import { bio } from "../../constants/bio";
import "./Register2.scss";

export const Register2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { newUser } = location.state || {};

  const initialValues = {
    gender: "",
    birthDate: "",
    height: "",
    weight: "",
    eyeColor: "",
    hairColor: "",
    hairType: "",
    bloodGroup: "",
    image: "",
    companyName: "",
    department: "",
    title: "",
    compAddress: "",
    compZip: "",
    compCity: "",
    compCountry: "",
    iban: "",
    type: "",
    number: "",
    cardExpire: "",
  };

  const validationSchema = object({
    gender: string().required("Required field"),
    birthDate: string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
        "Date must be in DD.MM.YYYY format"
      )
      .required("Required field")
      .test("age", "You must be at least 18 years old", (value) => {
        if (!value) return false;

        const [day, month, year] = value.split(".").map((v) => parseInt(v, 10));
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        const age = today.getFullYear() - birthDate.getFullYear();
        const isYearBefore =
          today.getMonth() < birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate());

        return age > 18 || (age === 18 && !isYearBefore);
      }),
    height: number()
      .required("Required field")
      .min(50)
      .max(250)
      .typeError("Required field"),
    weight: number()
      .required("Required field")
      .min(20)
      .max(400)
      .typeError("Required field"),
    eyeColor: string()
      .matches(/^[A-Za-z]+$/, "Must contain only letters")
      .required("Required field"),
    hairColor: string()
      .matches(/^[A-Za-z]+$/, "Must contain only letters")
      .required("Required field"),
    hairType: string()
      .matches(/^[A-Za-z]+$/, "Must contain only letters")
      .required("Required field"),
    bloodGroup: string().required("Required field"),
    image: string()
      .url("Must be a valid URL")
      .matches(/\.(jpeg|jpg|gif|png|webp|svg)$/i, "Must be a valid image link")
      .required("Required field"),
    companyName: string().required("Required field"),
    department: string().required("Required field"),
    title: string().required("Required field"),
    compAddress: string().required("Required field"),
    compZip: string()
      .matches(/^\d+$/, "ZIP must contain only numbers")
      .min(4)
      .max(6)
      .required("Required field"),
    compCity: string()
      .matches(/^[\p{L}\p{M}\s\-]{2,50}$/u, `Invalid format`)
      .min(2, `Invalid format`)
      .max(50, `Invalid format`)
      .required(`Required field`)
      .test(
        "capitalize",
        "Each word must start with an uppercase letter",
        (value) =>
          value
            ?.split(" ")
            .every((word) => word.charAt(0) === word.charAt(0).toUpperCase())
      ),
    compCountry: string()
      .matches(/^[\p{L}\p{M}\s\-]{2,50}$/u, `Invalid format`)
      .min(2, `Invalid format`)
      .max(50, `Invalid format`)
      .required(`Required field`)
      .test(
        "capitalize",
        "Each word must start with an uppercase letter",
        (value) =>
          value
            ?.split(" ")
            .every((word) => word.charAt(0) === word.charAt(0).toUpperCase())
      ),
    iban: string()
      .matches(/^[A-Z]{2}\d{2}[A-Z\d]{1,30}$/, "Invalid IBAN")
      .required("Required field"),
    type: string().required("Required field"),
    number: string()
      .matches(/^\d+$/, "Card number must contain only numbers")
      .min(13)
      .max(19)
      .required("Required field"),
    cardExpire: string()
      .matches(
        /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/,
        "Invalid date format. Use MM/YY or MM/YYYY"
      )
      .required("Required field"),
  });

  function createBio(values, formikEvent) {
    const userData = {
      ...newUser,
      gender: values.gender || null,
      birthDate: values.birthDate || null,
      height: values.height || null,
      weight: values.weight || null,
      eyeColor: values.eyeColor || null,
      hair: {
        color: values.hairColor || null,
        type: values.hairType || null,
      },
      bloodGroup: values.bloodGroup || null,
      image: values.image || null,
      company: {
        department: values.department || null,
        name: values.companyName || null,
        title: values.title || null,
        address: {
          address: values.compAddress || null,
          city: values.compCity || null,
          postalCode: values.compZip || null,
          country: values.compCountry || null,
        },
      },
      bank: {
        cardExpire: values.cardExpire || null,
        cardNumber: values.number || null,
        cardType: values.type || null,
        iban: values.iban || null,
      },
    };

    console.log(userData);
    console.log(newUser);
    try {
      axios({
        method: "GET",
        baseURL: "http://localhost:3000/users",
      }).then((response) => {
        const users = response.data;
        const user = users.find((user) => user.username === userData.username);
        if (user) {
          userData.id = user.id;
          updateUser(userData);
        } else {
          console.error("User not found.");
        }
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }

    function updateUser(updatedUserData) {
      try {
        axios({
          method: "PUT",
          url: `http://localhost:3000/users/${updatedUserData.id}`,
          data: updatedUserData,
        }).then((response) => {
          console.log("User updated successfully:", response.data);
          formikEvent.resetForm();
          navigate(`/registration-completed`, {
            state: {
              name: updatedUserData.firstName + " " + updatedUserData.lastName,
            },
          });
        });
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  }

  return (
    <main>
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
      <Nav user={newUser} />
      <div className="container reg2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, formikEvent) => createBio(values, formikEvent)}>
          <Form>
            <div className="form-block">
              {bio.map((arr, ind) => (
                <div key={ind} className={`form-block${ind}`}>
                  {arr.map(({ name, type, options, placeholder }, idx) => {
                    if (idx === 0) {
                      return <h2 key={name}>{name}</h2>;
                    } else {
                      return type === "select" ? (
                        <div key={name}>
                          <Field as="select" name={name}>
                            {options?.map((option, index) => (
                              <option
                                key={option}
                                value={index === 0 ? "" : option}
                                disabled={index === 0}>
                                {option}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name={name}
                            component="span"
                            className="error"
                          />
                        </div>
                      ) : (
                        <div key={name}>
                          <Field
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            autofill="true"
                          />
                          <ErrorMessage
                            name={name}
                            component="span"
                            className="error"
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              ))}
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};
