import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  function getData() {
    try {
      fetch("http://localhost:3005/users", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setUsersData(res));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  function deleteuser(userID) {
    if (!userID) return;
    try {
      fetch(`http://localhost:3005/users/${userID}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  function addUser(e) {
    e.preventDefault();

    fetch("http://localhost:3005/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: "",
        age: "",
        maidenName: "",
        gender: "",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  return (
    <div className="mainBox">
      <form onSubmit={addUser}>
        <input type="text" placeholder="name" />
      </form>
      {usersData.map((item) => {
        return (
          <div key={item.id} className="user">
            <h1>Name: {item.firstName}</h1>
            <h2> Lastname: {item.lastName}</h2>
            <p>Age: {item.age}</p>
            <p>Maiden Name:{item.maidenName}</p>
            <p>Gender: {item.gender}</p>
            <img src={item.image} alt="" />
            <button onClick={() => deleteuser(item.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
