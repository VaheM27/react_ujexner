import "./ToDoNav.css";

const TodoInput = ({ todoBox }) => {
  return (
    <div>
      <form onSubmit={todoBox}>
        <input type="text" id="todoText" />
        <input type="username" id="username" />
        <input
          type="password"
          placeholder="Password"
          autoComplete="password"
          id="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoInput;
