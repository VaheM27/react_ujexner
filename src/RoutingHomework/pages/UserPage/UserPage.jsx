import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
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
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};
