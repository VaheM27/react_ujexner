import UserData from "../UserData/UserData";
import { useState } from "react";

import "./Table.scss";

const Table = ({ users, onShowPassword, toggleChecked, remove }) => {
  const [sortType, setSortType] = useState("original");
  const [sort, setSort] = useState("");

  const handleSort = (type) => {
    setSortType(
      sort === type
        ? sortType === "asc"
          ? "desc"
          : sortType === "desc"
          ? "original"
          : "asc"
        : "asc"
    );
    setSort(type);
  };

  const sortedUsers = () => {
    if (sortType === "original") return users;

    return [...users].sort((a, b) => {
      const valueA = a[sort]?.toLowerCase?.() ?? a[sort];
      const valueB = b[sort]?.toLowerCase?.() ?? b[sort];

      return sortType === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
        ? 1
        : -1;
    });
  };

  const getSortIcon = (sorting) => {
    if (sort !== sorting) return null;

    const icons = {
      asc: <i className="bi bi-chevron-up"></i>,
      desc: <i className="bi bi-chevron-down"></i>,
      original: "",
    };

    return icons[sortType];
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Check</th>
          <th>ID</th>
          <th>Image</th>
          <th>
            <button onClick={() => handleSort("name")}>
              Name {getSortIcon("name")}
            </button>
          </th>
          <th>
            <button onClick={() => handleSort("surname")}>
              Surname {getSortIcon("surname")}
            </button>
          </th>
          <th>
            <button onClick={() => handleSort("username")}>
              Username {getSortIcon("username")}
            </button>
          </th>
          <th>Registered at</th>
          <th>Password</th>
          <th>Show</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers().map((user, index) => (
          <UserData
            key={user.id}
            onShowPassword={() => onShowPassword(user.id)}
            check={() => toggleChecked(user.id)}
            onClick={() => remove(user.id)}
            {...user}
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
