import "./ToDo.css";

const ToDo = ({
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
    <body>
      <li className="li" id={id}>
        <p>{text}</p>
        <p>{username}</p>
        <input type="checkbox" checked={isChecked} onChange={checked} />
        <input
          type={!isActive ? "password" : "text"}
          value={password}
          readOnly
        />
        <button className="btn1" onClick={showPassword}>
          <i className={`bi bi-eye${!isActive ? "-slash" : ""}`}></i>
        </button>
        <button className="btn" onClick={remove}>
          {" "}
          Delete{" "}
        </button>
      </li>
    </body>
  );
};

export default ToDo;