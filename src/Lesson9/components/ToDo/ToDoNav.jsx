import "./ToDoNav.css";

const TodoInput = ({ todoBox }) => {
  return (
    <div>
      <form onSubmit={todoBox}>
        <input type="checkbox" />
        <input type="text" id="todoText" />
        <input type="username" id="todoText" />
        <input
          type="password"
          placeholder="Password"
          autoComplete="password"
          id="todoText"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoInput;
