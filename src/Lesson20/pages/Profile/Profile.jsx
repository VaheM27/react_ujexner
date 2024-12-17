import React from 'react';
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import ROUTES from "../../Rountes";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import "./Profile.css";



export const Profile = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem("authToken");
  
  useEffect(() => {
    if (!token) {
      navigate(ROUTES.LOGIN);
    }
  }, [token, navigate]);



  const [message, setMessage] = useState("");
  const [usersData, setUsersData] = useState([]);

  const getUserData = async (userId) => {

    try {
      const response = await instance({
        method: "GET",
        params: {
          id: userId,
        },
      });
  
      if (response.data.length > 0) {
        setUsersData(response.data[0]);
        setMessage("");
  
      } else {
        setMessage("Something gets wrong");
      }
    }
  
    catch (error) {
      setMessage("Something gets wrong");
    }
  };

  const userID = localStorage.getItem('userID');

  useEffect(() => {
    getUserData(userID);
  }, []);

  return (
    <>
    <Nav />
    <div className='profile_div'>
      <p>{message}</p>
      <h1>Hello {usersData.firstname}</h1>

      <div className="user">
        <h1>Name: {usersData.firstname} {usersData.lastname}</h1>
        <h2>Email: {usersData.email}</h2>
      </div>

    </div>
    </>
  )
}
