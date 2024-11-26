import React from "react";

const TodoNav = ({ createTodoBox }) => {
  return (
    <div>
      <form onSubmit={createTodoBox}>
        <input type="text" id="todoText" />
        <input type="password" id="todoPassword" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoNav;