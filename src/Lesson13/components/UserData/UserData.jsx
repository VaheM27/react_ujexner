import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserData.css";

const UserData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="users" key={item.id}>
            <p>{item.id}</p>
            <img src={item.image} alt="" />
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.gender}</p>
            <Link className="btn" to={`/users/${item.id}`}>
              go
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default UserData;
