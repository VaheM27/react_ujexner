import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './User.css';

const User = () => {
  const { userId } = useParams();
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) return <div className="loading">Loading...</div>;

  const PrevBtn = () => {
    if (userId > 1) {
      navigate(`/users/${+userId - 1}`);
    }
  };

  const NextBTn = () => {
    navigate(`/users/${+userId + 1}`);
  };

  return (
    <div className="userBox">
      <h1>About This User</h1>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="userImage" />
      <h2>ID: {user.id}</h2>
      <h3>Name: {user.firstName} {user.lastName}</h3>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Blood Group: {user.bloodGroup}</p>
      <p>Height: {user.height} cm</p>
      <p>Weight: {user.weight} kg</p>
      <p>Eye Color: {user.eyeColor}</p>
      <p>Hair Color and Type: {user.hair.color} - {user.hair.type}</p>
      <p>Birth Date: {user.birthDate}</p>
      <div className='btns'>
        <button className='btn' onClick={PrevBtn} disabled={+userId <= 1}>Prev</button>
        <button className='btn' onClick={NextBTn} disabled={+userId >= 30}>Next</button>
      </div>
    </div>
  );
};

export default User;
