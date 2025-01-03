import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

export const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <Cards
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


