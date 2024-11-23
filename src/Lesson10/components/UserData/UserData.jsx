import { Button } from "../Main";

import "./UserData.scss";

export const UserData = ({
  name,
  surname,
  username,
  password,
  active,
  onShowPassword,
  check,
  status,
  isDone,
  onClick,
  id,
  link,
  index,
  date,
}) => {
  return (
    <tr className={`${isDone} ${index % 2 ? "odd" : "even"}`}>
      <td>
        <i className={status} onClick={check}></i>
      </td>
      <td>{id}</td>
      <td>
        <img src={link} alt={name} />
      </td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{date}</td>
      <td>{active ? password : "*************"}</td>
      <td>
        <i
          className={`bi bi-eye${!active ? "-slash" : ""}`}
          onClick={onShowPassword}></i>
      </td>
      <td>
        <Button onClick={onClick} buttonText="Delete" />
      </td>
    </tr>
  );
};

export default UserData;
