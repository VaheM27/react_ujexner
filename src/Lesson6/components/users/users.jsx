import { useState } from "react";
import usersData from "../../constants/usersData";

import "./users.css";

const Users = () => {
  const [showHide, setShowHide] = useState(true);
  const [items, setItems] = useState(usersData);

  function toggleShowHide() {
    setShowHide(!showHide);
  }

  function removeData(userId) {
    const updatedArr = items.filter((element) => element.id !== +userId);
    setItems(updatedArr);
  }

  return (
    <div className="main">
      <button onClick={toggleShowHide}>Show/Hide</button>
      <div className="users">
        {showHide && items.map((elm) => {
          return (
            <div className="user" key={elm.id}>
              <h2>{elm.id}</h2>
              <img src={elm.image} alt="" />
              <p>{elm.firstName + " " + elm.lastName}</p>
              <p>{elm.age}</p>
              <p>{elm.email}</p>
              <p onClick={() => removeData(elm.id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;