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

  function sort() {
    const sortedData = showUsers.toSorted((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    setShowUsers(sortedData);
  }

  return (
    <div className="us">
      <div className="sort">
        {showUsers.length > 0 ? (
          <p>{showUsers.length} users</p>
        ) : (
          <p>No Users</p>
        )}
        <button onClick={sort} disabled={showUsers.length > 1 ? false : true}>
          Sort A-Z
        </button>
      </div>
      {showUsers.map((elm) => {
        return (
          <div key={nanoid(2)}>
            <table className="show">
              <tbody>
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
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
