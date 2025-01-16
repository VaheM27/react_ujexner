import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors/userSelectors";

const ShowUser = () => {
  const users = useSelector(getUsers);
  return (
    <div>
      <div className="main_cards">
        {users?.map((item) => {
          return (
            <div key={item.id} className="user_card">
              <h1>{item.name}</h1>
              <h2>{item.srName}</h2>
              <h3>{item.age}</h3>
              <img src={item.photo} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowUser;
