import React, { useEffect, useState } from "react";
import UsersData from "../../components/UsersData/UsersData";
import Sorting from "../../components/Sorting/Sorting";

import "./Users.css"

export const Users = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);


  const sordByName = (arg) => {
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === "asc") return a[arg].toLowerCase() > b[arg].toLowerCase() ? 1 : -1;
      return a[arg].toLowerCase() < b[arg].toLowerCase() ? 1 : -1;
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="users_div">

      <div className="welcome_div">
        <h1>Users Page</h1>
      </div>

      <Sorting sordByName={sordByName} fields={['name', 'username', 'email']} />

      {data.map((item) => {
        return (
          <UsersData
            key={item.id}
            name={item.name}
            id={item.id}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </div>
  );
};


