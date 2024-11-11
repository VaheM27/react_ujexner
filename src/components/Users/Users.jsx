import { users } from "../../constants/usersData";

import "./Users.css"

const Users = () => {
  return (
    <>
      {users.map((elm) => {
        return (
          <div className="usersFlex">
            <p key={elm.id}>{elm.firstName + elm.age }</p> 
            <img key={elm.id} src={elm.image} alt="image" />
            <p key={elm.id}> {elm.email}</p>
            <p key={elm.id}>{elm.height}</p>
          </div>
        );
      })}
    </>
  );
};

export default Users;
