import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./User.css";

export const User = () => {
  const navigate = useNavigate();
  const [dataLenght, setDataLenght] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setDataLenght(data.limit));
  }, []);
  const next = (id) => (+id % dataLenght) + 1;

  const prev = (id) => {
    if (id == 1) {
      return dataLenght;
    } else {
      return (+id - 1 + dataLenght) % dataLenght;
    }
  };
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="userBox">
      <div>
        <button className="btn1" onClick={() => navigate(`/users/${prev(id)}`)}>prev</button>
        <button  className="btn2" onClick={() => navigate(`/users/${next(id)}`)}>next</button>
      </div>
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
