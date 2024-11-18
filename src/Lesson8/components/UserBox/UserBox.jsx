const UserBox = ({ user, remove, isActive, onShowPassword }) => (
  <tr className="UserBox" style={{ background: user.color }}>
    <td>{user.id}</td>
    <td>
      <img src={user.image} alt={user.name} width="50" />
    </td>
    <td>{user.name}</td>
    <td>{user.age * 2 + 20}</td>
    <td>{user.address}</td>
    <td>{user.createdAt}</td>
    <td>{user.userName}</td>
    <td>
      <input
        type={!isActive ? "password" : "text"}
        value={user.password}
        id={user.id}
        readOnly
      />
      <button onClick={onShowPassword} className="show">
        <i className={`bi bi-eye${!isActive ? "-slash" : ""}`}></i>
      </button>
    </td>
    <td>
      <button onClick={remove} style={{ color: user.color }} className="delete">
        Delete
      </button>
    </td>
  </tr>
);

export default UserBox;
