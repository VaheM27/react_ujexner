import { nanoid } from "nanoid";
import { useState } from "react";

import "./Users.scss";

const Users = () => {
  const [showUsers, setShowUsers] = useState([]);

  function show() {
    setShowUsers([...showUsers], { id: nanoid(2), name: nanoid() });
  }
  return (
    <div>
      <button onClick={show}>Add Users</button>
      {showUsers.map((elm) => {
        return (
          <div className="show" key={elm.id}>
            <p>{elm.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
