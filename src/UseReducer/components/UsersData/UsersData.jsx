import { useEffect, useState } from "react";
import axios from "axios";

import "./UsersData.css";

const UsersData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/users").then((res) => setData(res.data.users));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="users" key={item.id}>
            <p className="p">{item.id}</p>
            <img className="img" src={item.image} alt="" />
            <p className="p">{item.firstName}</p>
            <p className="p">{item.lastName}</p>
            <p className="p">{item.email}</p>
            <p className="p">{item.phone}</p>
            <p className="p">{item.gender}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UsersData;
