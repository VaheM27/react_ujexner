
import React, { useState } from "react";
import { nanoid } from "nanoid";
import TodoNav from "./components/TodoNav/TodoNav";
import TodoBody from "./components/TodoBody/TodoBody";

import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  function createTodoBox(e) {
    e.preventDefault();
    const { todoText,todoPassword } = e.target;
    const todoData = {
      id: nanoid(10),
      text: todoText.value.trim(),
      password: todoPassword.value.trim(),
      isChecked: false,
    };

    if (!todoText.value.trim()) return;
    if (!todoPassword.value.trim()) return;
    setTodo([...todo, todoData]);
    todoText.value = "";
    todoPassword.value = "";
  }

  function deleteTodo(id) {
    const filteredData = todo.filter((item) => item.id !== id);
    setTodo(filteredData);
  }

  return (
    <div>
      <TodoNav createTodoBox={createTodoBox} />
      <TodoBody todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
    </div>
  );
};

export default App;
