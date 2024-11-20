import "./TaskList.scss";

const TaskList = ({
  name,
  surname,
  username,
  password,
  id,
  isChecked,
  isActive,
  onShowPassword,
  check,
  remove,
  isDone,
}) => {
  return (
    <tr className={isDone} id={id}>
      <td>
        <input type="checkbox" checked={isChecked} onChange={check} />
      </td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>
        <input
          type={!isActive ? "password" : "text"}
          value={password}
          readOnly
        />
        <button onClick={onShowPassword} className="show">
          <i className={`bi bi-eye${!isActive ? "-slash" : ""}`}></i>
        </button>
        <button onClick={remove}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskList;
