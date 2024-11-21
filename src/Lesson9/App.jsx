import { useState } from "react";
import InputBox from "./InputBox/inputBox"
import TodoList from "./TodoList/todoList"

import { nanoid } from "nanoid";
import "./App.css";


function App() {

  const [todo, setTodo] = useState([]);

  function createTodoBox(e) {
    e.preventDefault();
    const { todoName, todoAge, todoEmail, todoPassword } = e.target;
    const todoData = {
      id: nanoid(5),
      name: todoName.value.trim(),
      age: todoAge.value.trim(),
      email: todoEmail.value.trim(),
      password: todoPassword.value.trim(),
      isChecked: false,
    };
    if (!todoName.value.trim()) return;


    setTodo([...todo, todoData]);
    todoName.value = "";

  }

  function deleteTodo(id) {
    const filteredData = todo.filter((item) => item.id !== id);
    setTodo(filteredData)
  }

  function toggleCheckbox(id) {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }
  console.log(todo);


  return (
    <div className="App">
      <InputBox createTodoBox={createTodoBox} />
      <TodoList todo={todo} deleteTodo={deleteTodo} toggleCheckbox={toggleCheckbox} />
    </div>
  );
}

export default App;
