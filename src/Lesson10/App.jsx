import { Form } from "./components/Form/Form";
import Table from "./components/Table/Table";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import "./App.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [activePasswordId, setActivePasswordId] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const submitDatas = (e) => {
    e.preventDefault();
    const { name, surname, username, password, link } = e.target.elements;
    const fields = {
      name: name.value.trim(),
      surname: surname.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      link: link.value.trim(),
    };

    const nameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,16}$/;
    const linkRegex = /^(https?:\/\/|\.\/|\.\.\/)/;
    const errors = [];

    !fields.name
      ? errors.push("Name is required!")
      : !nameRegex.test(fields.name) &&
        errors.push("Name must contain only letters!");

    !fields.surname
      ? errors.push("Surname is required!")
      : !nameRegex.test(fields.surname) &&
        errors.push("Surname must contain only letters!");

    !fields.username && errors.push("Username is required!");
    users.some((user) => user.username === fields.username) &&
      errors.push("Username already exists");

    !fields.password
      ? errors.push("Password is required!")
      : !passwordRegex.test(fields.password) &&
        errors.push(
          "Password must be 8-16 characters long and contain at least one lowercase letter, one uppercase letter, and one number. No symbols allowed!"
        );

    !fields.link
      ? errors.push("Image URL is required!")
      : !linkRegex.test(fields.link) &&
        errors.push("URL must start with http://, https://, ./ or ../!");

    if (errors.length) {
      setFormErrors({ errors });
      return;
    }

    const capitalize = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: capitalize(fields.name),
        surname: capitalize(fields.surname),
        username: fields.username,
        password: fields.password,
        date: currentTime.toLocaleString(),
        link: fields.link,
        status: "bi bi-square",
        isDone: "active",
        isChecked: false,
        id: uuidv4().replace(/-/g, "").substring(0, 8),
        active: false,
      },
    ]);

    setFormErrors([]);
    e.target.reset();
  };

  const handleShowPassword = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        active: user.id === userId ? activePasswordId !== userId : false,
      }))
    );
    setActivePasswordId(activePasswordId !== userId ? userId : null);
  };

  const toggleChecked = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              isChecked: !user.isChecked,
              isDone: !user.isChecked ? "done" : "active",
              status: !user.isChecked ? "bi bi-check-square" : "bi bi-square",
            }
          : user
      )
    );
  };

  const remove = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className="container">
      <Form submit={submitDatas} disable={Object.keys(formErrors).length > 0} />
      {Object.keys(formErrors).length > 0 && (
        <div className="error-messages">
          {formErrors.errors.map((error, index) => (
            <p key={index} className="error">
              {error}
            </p>
          ))}
        </div>
      )}
      <Table
        users={users}
        onShowPassword={handleShowPassword}
        toggleChecked={toggleChecked}
        remove={remove}
      />
    </div>
  );
};

export default App;
