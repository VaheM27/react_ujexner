import React from "react";
import { useEffect, useState } from "react";

import "./ToDos.css";

export const ToDos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((result) => setData(result.todos));
  });

  return (
    <div className="todo">
      <h1 style={{ userSelect: "none" }}>ToDos</h1>
      {data.map((elm) => {
        return (
          <div className="todo-box" key={elm.id + elm.todo}>
            <div>
              <p style={{ userSelect: "none" }}>{elm.id}</p>
              <p>{elm.todo}</p>
              <button className="todo-button">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
