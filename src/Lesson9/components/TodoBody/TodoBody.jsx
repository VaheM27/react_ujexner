import React from "react";

import "./TodoBody.css";

const TodoBody = ({ todo, deleteTodo, setTodo }) => {
  return (
    <div>
      {todo.map((item) => {
        return (
          <div key={item.id} className="todoBox">
            <input type="checkbox" />
            <p>{item.text}</p>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBody;
