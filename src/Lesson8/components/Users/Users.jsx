import React, { useState, useEffect } from "react";

import eye from "../../assets/png/eye.png";
import hide from "../../assets/png/hide.png";
import sort from "../../assets/png/sort.png";

const Users = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [passwordVisibility, setPasswordVisibility] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  const togglePasswordVisibility = (id) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [id]: !passwordVisibility[id],
    }));
  };

  const sortData = () => {
    const sortedData = data.toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : 0;
      } else {
        return a.name.toLowerCase() < b.name.toLowerCase()
          ? 1
          : a.name.toLowerCase() > b.name.toLowerCase()
          ? -1
          : 0;
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortAge = () => {
    const sortedData = data.toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;
      } else {
        return a.age < b.age ? 1 : a.age > b.age ? -1 : 0;
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortCreateDate = () => {
    const sortedData = data.toSorted((a, b) => {
      const date_a = new Date(a.createdAt);
      const new_date_a = `${String(date_a.getDate()).padStart(2, "0")}/${String(
        date_a.getMonth() + 1
      ).padStart(2, "0")}/${date_a.getFullYear()} ${String(
        date_a.getHours()
      ).padStart(2, "0")}:${String(date_a.getMinutes()).padStart(2, "0")}`;

      const date_b = new Date(b.createdAt);
      const new_date_b = `${String(date_b.getDate()).padStart(2, "0")}/${String(
        date_b.getMonth() + 1
      ).padStart(2, "0")}/${date_b.getFullYear()} ${String(
        date_b.getHours()
      ).padStart(2, "0")}:${String(date_b.getMinutes()).padStart(2, "0")}`;

      if (sortOrder === "asc") {
        return new_date_a > new_date_b ? 1 : new_date_a < new_date_b ? -1 : 0;
      } else {
        return new_date_a < new_date_b ? 1 : new_date_a > new_date_b ? -1 : 0;
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const deleteUser = (id) => {
    setData(data.filter((div) => div.id !== id));
  };

  useEffect(() => {
    function getData() {
      fetch("https://673c38ce96b8dcd5f3f8f919.mockapi.io/project1")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    getData();
  }, [limit]); // erbvor talis enq datark zangvac [] nshanuka componentDidMount - aysinqn componenty stexcveluc heto

  function increment() {
    setLimit(limit + 10);
  }

  function dateFormat(dateString) {
    const date = new Date(dateString);
    const new_date = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return new_date;
  }

  return (
    <div>
      <h1 onClick={increment}>Limit:{limit}</h1>
      <p>Users</p>

      <div className="buttons">
        <button onClick={sortData}>
          Name {sortOrder === "asc" ? "A-Z" : "Z-A"} <img src={sort}></img>
        </button>

        <button onClick={sortAge}>
          Age {sortOrder === "asc" ? "A-Z" : "Z-A"} <img src={sort}></img>
        </button>

        <button onClick={sortCreateDate}>
          Create At {sortOrder === "asc" ? "A-Z" : "Z-A"} <img src={sort}></img>
        </button>
      </div>

      {data.map(
        ({ id, color, textcolor, name, avatar, age, password, createdAt }) => {
          return (
            <div
              key={id}
              style={{ background: color, color: textcolor }}
              className="userBox"
            >
              <h1>{name}</h1>
              <img src={avatar} alt="" width={200} />
              <h3>Created At: {dateFormat(createdAt)}</h3>
              <h3>Age: {age}</h3>
              <div className="show_password">
                <input
                  type={passwordVisibility[id] ? "text" : "password"}
                  value={password}
                  readOnly
                ></input>
                <img
                  onClick={() => togglePasswordVisibility(id)}
                  src={passwordVisibility[id] ? hide : eye}
                  alt="asdasds"
                />
              </div>

              <button onClick={() => deleteUser(id)} className="delete_button">
                Delete
              </button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Users;
