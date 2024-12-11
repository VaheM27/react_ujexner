import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../axios";

import "./User.scss";

const User = () => {
  const { username } = useParams();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    instance({
      method: "GET",
      url: "users",
    }).then((res) => setArr(res.data));
  }, []);
  const user = arr.find((item) => item.name === username);
  return (
    <div>
      <h3>{user?.id}</h3>
      <h4>{user?.fullName}</h4>
      <h5>{user?.name}</h5>
    </div>
  );
};

export default User;
