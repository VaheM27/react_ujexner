import { useState } from "react";
import { nanoid } from "nanoid/non-secure";
import TodoInput from "./components/ToDo/ToDoNav";
import ToDo from "./components/ToDo/ToDo";

import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  function todoBox(e) {
    e.preventDefault();
    const { todoText } = e.target;
    const todoData = {
      id: nanoid(10),
      Text: todoText.value.trim(),
      isChected: false,
    };
    if (!todoText.value.trim()) return;
    setTodo([...todo, todoData]);

    todoText.value = "";
  }
  return (
    <div>
      <TodoInput todoBox={todoBox} />
      <ToDo todo={todo} />
    </div>
  );
};

export default App;
