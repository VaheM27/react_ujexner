import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./User.css"

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="userBox">
      <p>{user.id}</p>
      <img src={user.image} alt="images" />
      <h1>{user.firstName}</h1>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.gender}</p>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <p>{user.birthDate}</p>
      <p>{user.bloodGroup}</p>
      <p>{user.height}</p>
      <p>{user.weight}</p>
      <p>{user.eyeColor}</p>
    </div>
  );
};
