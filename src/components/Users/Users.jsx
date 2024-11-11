import { users } from "../../constants/usersData";

import "./Users.scss"

const Users = () => {
  return (
    <>
      {users.map((elm) => {
        return (
          <div className="usersFlex">
            <p key={elm.id}>{elm.firstName + elm.age}</p> ;
            <img key={elm.id} src={elm.image} alt="image" />
            <p> {elm.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Users;
