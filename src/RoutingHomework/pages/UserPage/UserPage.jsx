import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ROUTES from "../../Routes";

export const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, [id]);

  //   console.log(user);

  return (
    <div>
      <h1> {user?.firstName}</h1>
      <h1>{user?.lastName}</h1>
      <div>
        <button onClick={() => navigate(`/${ROUTES.USERS}/${+id - 1}`)}>
          Prev
        </button>
        <button
          disabled={+id === 208}
          onClick={() => navigate(`/${ROUTES.USERS}/${+id + 1}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
