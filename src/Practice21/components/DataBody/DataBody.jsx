import React from "react";

import "./DataBody.css";

export const DataBody = ({ todo }) => {
  return (
    <div className="dataBox">
      {todo.map((elm) => {
        return (
          <div className="box">
            <p>Login : {elm.login}</p>
            <p>Password : {elm.pass}</p>
          </div>
        );
      })}
    </div>
  );
};
