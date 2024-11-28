import React from 'react'
import back from "../../assets/react_back.jpg";

import "./Home.css"

export const Home = () => {
  return (
    <div className='home_welcome'>
      <h1>Welcome</h1>

      <img src={back}/>
    </div>
  )
}

