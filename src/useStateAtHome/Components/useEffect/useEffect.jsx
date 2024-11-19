import { useState, useEffect } from "react";

import "./useEffect.css";

export const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      <h1>UseEffect</h1>
      {data.map((elm) => {
        return (
          <div className="nixuya_sibe" key={elm.id}>
            <p>{elm.name}</p>
          </div>
        );
      })}
    </div>
  );
};
