import { useEffect, useState } from "react";
import "./UsersFromMockapi.scss";
import { nanoid } from "nanoid";

const UsersFromMockapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("https://64f9c3124098a7f2fc14f1ec.mockapi.io/users")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    getData();
  }, []);

  const removeID = (id) => {
    const newData = data.filter((elm) => {
      return elm.id !== id;
    });
    setData(newData);
  };

  const [sort, setSort] = useState(1);
  const sortData = (name) => {
    switch (name) {
      case "Name":
        const sortDataByName = data.toSorted((a, b) =>
          sort === 1
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        setSort(sort === 1 ? -1 : 1);
        setData(sortDataByName);
        break;
      case "Age":
        const sortDataByAge = data.toSorted((a, b) =>
          sort === 1 ? a.age.localeCompare(b.age) : b.age.localeCompare(a.age)
        );
        setSort(sort === 1 ? -1 : 1);
        setData(sortDataByAge);
        break;
      case "ID":
        const sortDataByID = data.toSorted((a, b) =>
          sort === 1 ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
        );
        setSort(sort === 1 ? -1 : 1);
        setData(sortDataByID);
      default:
        break;
    }
  };
  const [pass, setPass] = useState({});
  const showPass = (id) => {
    console.log(id);

    setPass({
      [id]: !pass[id],
    });
  };

  const navList = ["Name", "Age", "ID"];
  return (
    <div className="container">
      <div className="main">
        <ul className="nav">
          <li>Sort Users by:</li>
          {navList.map((elm) => {
            return (
              <li key={nanoid(2)}>
                <button onClick={() => sortData(elm)}>{elm}</button>
              </li>
            );
          })}
        </ul>
        <div className="usersBox">
          {data.map(
            ({
              createdAt,
              name,
              color,
              textColor,
              avatar,
              age,
              password,
              id,
            }) => {
              return (
                <div key={id} className="box" style={{ background: color }}>
                  <p style={{ fontSize: "40px" }}>Created At: {createdAt}</p>
                  <div className="infoBox">
                    <img src={avatar} alt="img" />
                    <span
                      className="info"
                      style={{ color: textColor, position: "relative" }}
                    >
                      <span
                        onClick={() => {
                          removeID(id);
                        }}
                        style={{
                          background: textColor,
                          color: color,
                          borderColor: textColor,
                        }}
                      >
                        Delete &times;
                      </span>
                      <p>ID: {id}</p>
                      <p>Name: {name}</p>
                      <p>Age: {age}</p>
                    </span>
                  </div>
                  <p>
                    Password:{" "}
                    <input
                      onClick={() => {
                        showPass(id);
                      }}
                      type={pass[id] ? "text" : "password"}
                      value={password}
                      readOnly
                    />
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersFromMockapi;
