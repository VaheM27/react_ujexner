import "./ToDo.css";

const ToDo = ({
  done,
  remove,
  id,
  showPassword,
  isActive,
  text,
  username,
  password,
  checked,
  isChecked,
}) => {
  return (
    <li id={id}>
      <p>{text}</p>
      <p>{username}</p>
      <input type="checkbox" checked={isChecked} onChange={checked} />
      <input type={!isActive ? "password" : "text"} value={password} readOnly />
      <button onClick={showPassword}>
        <i className={`bi bi-eye${!isActive ? "-slash" : ""}`}></i>
      </button>
      <button onClick={remove}> Delete </button>
    </li>
  );
};

export default ToDo;
