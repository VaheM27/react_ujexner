import { useState, useEffect } from "react";
import UserBox from "../UserBox/UserBox";

import "./UserSection.scss";

const UserSection = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  const [sortCriteria, setSortCriteria] = useState({
    type: null,
    order: "asc",
  });

  const handleShowPassword = (userId) =>
    setActiveUserId((prev) => (prev === userId ? null : userId));

  const removeUser = (userId) => {
    const filterById = (user) => user.id !== userId;
    setUsers((prev) => prev.filter(filterById));
    setOriginalUsers((prev) => prev.filter(filterById));
  };

  useEffect(() => {
    fetch("https://673b4d19339a4ce4451b9745.mockapi.io/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setOriginalUsers(res);
      });
  }, []);

  const sortUsers = () => {
    const { type, order } = sortCriteria;
    if (!type) {
      setUsers(originalUsers);
      return;
    }

    const sortedUsers = [...users].toSorted((a, b) => {
      const valueA = type === "createdAt" ? new Date(a[type]) : a[type];
      const valueB = type === "createdAt" ? new Date(b[type]) : b[type];
      return (order === "asc" ? valueA > valueB : valueA < valueB) ? 1 : -1;
    });

    setUsers(sortedUsers);
  };

  const handleSort = (type) => {
    setSortCriteria((prev) => {
      if (prev.type === type && prev.order === "desc") {
        setUsers(originalUsers);
        return { type: null, order: "" };
      }

      return {
        type,
        order:
          prev.type === type ? (prev.order === "asc" ? "desc" : "") : "asc",
      };
    });
  };

  useEffect(() => {
    sortUsers();
  }, [sortCriteria]);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>
              Name{" "}
              <button onClick={() => handleSort("name")}>
                Sort Name{" "}
                {sortCriteria.type === "name" ? (
                  sortCriteria.order === "desc" ? (
                    <i className="bi bi-chevron-up"></i>
                  ) : (
                    <i className="bi bi-chevron-down"></i>
                  )
                ) : (
                  ""
                )}{" "}
              </button>
            </th>
            <th>
              Age{" "}
              <button onClick={() => handleSort("age")}>
                Sort Age{" "}
                {sortCriteria.type === "age" ? (
                  sortCriteria.order === "desc" ? (
                    <i className="bi bi-chevron-up"></i>
                  ) : (
                    <i className="bi bi-chevron-down"></i>
                  )
                ) : (
                  ""
                )}{" "}
              </button>
            </th>
            <th>Address</th>
            <th>
              Registered At{" "}
              <button onClick={() => handleSort("createdAt")}>
                Sort Registered At{" "}
                {sortCriteria.type === "createdAt" ? (
                  sortCriteria.order === "desc" ? (
                    <i className="bi bi-chevron-up"></i>
                  ) : (
                    <i className="bi bi-chevron-down"></i>
                  )
                ) : (
                  ""
                )}{" "}
              </button>
            </th>
            <th>Username</th>
            <th>Password</th>
            <th>
              <button onClick={() => setUsers([])}>Delete All</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserBox
              key={user.id}
              user={user}
              remove={() => removeUser(user.id)}
              isActive={activeUserId === user.id}
              onShowPassword={() => handleShowPassword(user.id)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserSection;
