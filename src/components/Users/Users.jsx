import { users } from "../../constants/usersData";

const Users = () => {
  return (
    <>
      {users.map((elm) => {
        return <p key={elm.id}>{elm.firstName}</p>;
      })}
    </>
  );
};

export default Users;
