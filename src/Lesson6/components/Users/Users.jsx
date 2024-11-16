import { useState } from "react";
import { users } from "../../components/constants/user";

import "./Users.css";

const Users = () => {
  const [item, setItem] = useState(users);
  function filterdata(userId) {
    const remuveData = item.filter((elm) => elm.id !== userId);
    setItem(remuveData);
  }
  return (
    <>
      {item.map((elm) => {
        return (
          <div className="usersFlex">
            <p key={elm.id}>{elm.firstName + " " + elm.age}</p>
            <img key={elm.id} src={elm.image} alt="image" />
            <p key={elm.id}> {elm.email}</p>
            <p key={elm.id}>{elm.height}</p>
            <p className="pi" onClick={() => filterdata(elm.id)}>
              x
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Users;
