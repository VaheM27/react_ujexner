import { useState } from "react";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(null);

  const formValue = (e) => {
    e.preventDefault();
    const { name, surname, username, password } = e.target;
    const dataList = {
      name: name.value.trim(),
      surname: surname.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      isChecked: false,
      id: uuidv4(),
      isDone: "active",
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
          <tbody>
            {todos.map((todo) => {
              return (
                <TaskList
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
