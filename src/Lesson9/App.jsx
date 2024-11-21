import { useState } from "react";
import { nanoid } from "nanoid/non-secure";
import TodoInput from "./components/ToDo/ToDoNav";
import ToDo from "./components/ToDo/ToDo";

import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [active, setActive] = useState(null);
  const showPassword = (todoId) =>
    setActive((active) => (active === todoId ? null : todoId));

  const checked = (todoId) => {
    setTodo((todo) =>
      todo.map((item) =>
        item.id === todoId
          ? {
              ...item,
              isChecked: !item.isChecked,
              done: !item.isChecked ? "pink" : "",
            }
          : item
      )
    );
  };

  const remove = (todoId) =>
    setTodo((todo) => todo.filter((item) => item.id !== todoId));

  function todoBox(e) {
    e.preventDefault();
    const { todoText, username, password } = e.target;
    const todoData = {
      id: nanoid(10),
      text: todoText.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
      isChecked: false,
      done: "green",
    };
    if (!todoText.value.trim()) return;
    setTodo([...todo, todoData]);

    e.target.reset();
  }
  return (
    <div>
      <TodoInput todoBox={todoBox} />
      <ul>
        {todo.map(({ id, text, username, password, isChecked }) => {
          return (
            <ToDo
              key={id}
              showPassword={() => showPassword(id)}
              isActive={active === id}
              text={text}
              username={username}
              password={password}
              id={id}
              remove={() => remove(id)}
              checked={() => checked(id)}
              isChecked={isChecked}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
