import "./ToDoNav.css";

const TodoInput = ({ todoBox }) => {
  return (
    <div className="back">
      <form className="hei" onSubmit={todoBox}>
        <input type="text" id="todoText" placeholder="Name" />
        <input type="username" placeholder="Username" id="username" />
        <input
          type="password"
          placeholder="Password"
          autoComplete="password"
          id="password"
        />
        <input  className="btn2" type="submit" />
      </form>
    </div>
  );
};

export default TodoInput;
