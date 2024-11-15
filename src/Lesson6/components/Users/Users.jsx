import user from "./userData";
import { nanoid } from "nanoid";
import { useState } from "react";

import "./Users.scss";

const Users = () => {
  const [showUsers, setShowUsers] = useState(user);

  const newData = (id) => {
    const remover = showUsers.filter((element) => element.id !== id);
    setShowUsers(remover);
  };

  return (
    <div className="us">
      <p>{showUsers.length} users</p>
      {showUsers.map((elm) => {
        return (
          <div key={nanoid(2)}>
            <table className="show">
              <tr>
                <td>{elm.id}.</td>
                <td>{elm.name}</td>
                <td>{elm.phone}</td>
                <td>{elm.email}</td>
                <td>{elm.username}</td>
                <td>{elm.website}</td>
                <td>
                  <button
                    onClick={() => {
                      newData(elm.id);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
