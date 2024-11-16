import React, { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    function getData() {
      fetch("https://64f9c3124098a7f2fc14f1ec.mockapi.io/users")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    getData();
  }, [limit]); // erbvor talis enq datark zangvac [] nshanuka componentDidMount - aysinqn componenty stexcveluc heto

  // useEffect(() => {
  //   console.log("Hello from second useEffect");
  // }, [number]); // componentDidUpdate

  function increment() {
    setLimit(limit + 10);
  }
  return (
    <div>
      <h1 onClick={increment}>Limit:{limit}</h1>
      <p>Users</p>
      {data.map(({ id, color, textColor, name, avatar, city, createdAt }) => {
        // createdAt": "2024-11-16T07:59:20.379Z",
        // "name": "Gordon Dietrich",
        // "color": "#2691cd",
        // "textColor": "#7ecff2",
        // "avatar": "https://loremflickr.com/640/480/people",
        // "city": "https://loremflickr.com/640/480/city",
        // "id": "1"
        return (
          <div
            key={id}
            style={{ background: color, color: textColor }}
            className="userBox"
          >
            <h1>{name}</h1>
            <img src={avatar} alt="" width={200} />
            <h3>Created At:{createdAt}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
