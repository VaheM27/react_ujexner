import { users } from "../../constants/usersData";

const Users = () => {
  return (
    <>
      {users.map((elm) => {
        return <p key={elm.id}>{elm.firstName + elm.age}</p>;
      })}
    </>
  );
};

export default Users;
