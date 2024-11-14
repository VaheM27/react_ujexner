import { useState } from "react";
import data from "../../constants/data";

import "./Users.scss";

const Users = () => {
  const [show, setShow] = useState(true);
  const [items, setItems] = useState(data);

  function showHide() {
    setShow(!show);
  }

  function removeData(userId) {
    const updatedArr = items.filter((element) => element.id !== +userId);
    setItems(updatedArr);
  }

  return (
    <div className="mainContent">
      <button onClick={showHide}>Show/Hide</button>
      <div className="users">
        {show &&
          items.map((elm) => {
            return (
              <div className="userData" key={elm.id}>
                <img src={elm.image} alt="" />
                <p>{elm.firstName + " " + elm.lastName}</p>
                <p>{elm.age}</p>
                <p>{elm.email}</p>
                <p onClick={() => removeData(elm.id)}>&times;</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
