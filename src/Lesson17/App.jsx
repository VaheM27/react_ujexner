import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import Box from "./components/Box/Box";

import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [data]);

  return (
    <div className="app">
      <UserForm currentArr={data} />
      <div className="boxes">
        {data.map((item) => {
          return (
            <Box
              key={item.id}
              id={item.id}
              fName={item.firstName}
              lName={item.lastName}
              email={item.email}
              img={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
