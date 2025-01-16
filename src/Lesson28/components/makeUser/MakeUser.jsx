import React from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/actions/userActions";
import { makeUser } from "../../helpers/makeUser";

const MakeUser = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addUsers(makeUser(e.target)));
          e.target.reset();
        }}
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="SrName" />
        <input type="text" placeholder="Age" />
        <label>
          Choose your image
          <input type="file" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeUser;
