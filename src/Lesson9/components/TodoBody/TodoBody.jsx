import React from "react";

import "./TodoBody.css";
import * as icon from "react-bootstrap-icons";

const TodoBody = ({ todo, deleteTodo, setTodo }) => {
  return (
    <div className="boxTow">
      {todo.map((item) => {
        return (
          <div key={item.id} className="todoBox">
            <input type="checkbox" />
            <p>name: {item.text}</p>
            <p>password: {item.password } { <icon.Eye />}</p>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBody;
