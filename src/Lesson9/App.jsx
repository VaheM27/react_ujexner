import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formValue = (e) => {
    e.preventDefault();
    const { name, surname, username, password } = e.target;
    const dataList = {
      name: name.value.trim(),
      surname: surname.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      date: currentTime.toLocaleString(),
      status: "bi bi-square",
      isDone: "active",
      isChecked: false,
      id: uuidv4(),
    };

    if (
      !name.value.trim() ||
      !surname.value.trim() ||
      !username.value.trim() ||
      !password.value.trim()
    )
      return;

    setTodos([...todos, dataList]);
    e.target.reset();
  };

  const handleShowPassword = (todoId) =>
    setActive((active) => (active === todoId ? null : todoId));

  const toggleChecked = (todoId) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              isChecked: !todo.isChecked,
              isDone: !todo.isChecked ? "done" : "active",
              status: !todo.isChecked ? "bi bi-check-square" : "bi bi-square",
            }
          : todo
      )
    );
  };

  const remove = (todoId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="container">
      <div className="flexBox">
        <Form submit={formValue} />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Created at</th>
              <th>Username</th>
              <th>Password</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <TaskList
                  key={todo.id}
                  {...todo}
                  isActive={active === todo.id}
                  onShowPassword={() => handleShowPassword(todo.id)}
                  check={() => toggleChecked(todo.id)}
                  remove={() => remove(todo.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
