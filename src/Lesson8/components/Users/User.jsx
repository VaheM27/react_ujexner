import { useState, useEffect } from "react";

import * as Icon from 'react-bootstrap-icons';
import "./User.css";

const Users = () => {
  const [data, setData] = useState([]);
  const [sortName, setSortName] = useState(true);

  const sorted = () => {
    const sortedData = data.toSorted((a, b) => {
      if (sortName) {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      } else {
        return a.name < b.name ? 1 : a.name  > b.name ? -1 : 0;
      }
    });
    setData(sortedData);
    setSortName(!sortName);
  };

  useEffect(() => {
    function getData() {
      fetch("https://67450eedb4e2e04abea48cf0.mockapi.io/Users")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    getData();
  }, []);

  return (
    <div className="box">
      <p className="bt" onClick={sorted}> <Icon.SortAlphaDown size={20} id="icon"/> </p>
      {data.map(
        ({ id, color, textColor, name, avatar, city, createdAt, age }) => {
          return (
            <div
              key={id}
              style={{ background: color, color: textColor }}
              className="userBox"
            >
              <input type="submit" style={{ color: color }} />
              <h2>{name}</h2>
              <p>Age-{age}</p>
              <img src={avatar} alt="avatar" />
              <span>
                City <br /> <img src={city} alt="city" />{" "}
              </span>
              <p> createAt {createdAt} </p>
              <button className="del">Delete</button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Users;
