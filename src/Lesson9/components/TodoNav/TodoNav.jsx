import React from "react";


import "./TodoNav.css";
const TodoNav = ({ createTodoBox }) => {
  return (
    <div className="boxOne">
      <form onSubmit={createTodoBox}>
        <input placeholder="name" type="text" id="todoText" />
        <input placeholder="password" type="password" id="todoPassword"/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoNav;
