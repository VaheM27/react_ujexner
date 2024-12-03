import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="cardBox">
      {data.map((user, index) => (
        <div className="Card" key={index}>
          <h2>ID:{user.id}</h2>
          <h1>Name:{user.firstName}</h1>
          <p>Age:{user.age}</p>
          <p>Gender:{user.gender}</p>
          <button onClick={() => handleUserClick(user.id)}>About This User</button>
        </div>
      ))}
    </div>
  );
};

export default Users;