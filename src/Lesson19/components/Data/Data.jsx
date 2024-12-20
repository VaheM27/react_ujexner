import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";

import "./Data.css";

const Data = () => {
  const [data, setData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setData(res.data)
    );
  }, []);

  function toggleMod() {
    setToggleModal(!toggleModal);
  }

  function setCurrentUser(obj) {
    setUserData(obj);
  }

  function deleteUser() {
    setData(data.filter((item) => item.id !== userData.id));
    setUserData(null);
    toggleMod();
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="userBox" key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.email}</p>
            <a href={`mailto:${item.website}`} rel="noreferrer">
              {item.website}
            </a>
            <div
              className="deleteItem"
              onClick={() => {
                toggleMod();
                setCurrentUser({ id: item.id, name: item.name });
              }}
            >
              &times;
            </div>
          </div>
        );
      })}
      {toggleModal ? (
        <Modal
          mainText={`Are you sure to delete ${userData.name} profile?`}
          firstText={"Yes"}
          lastText={"No"}
          clickFuntion={deleteUser}
          toggleMod={toggleMod}
        />
      ) : null}
    </div>
  );
};

export default Data;
