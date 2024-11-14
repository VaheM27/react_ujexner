import { useState } from "react";

import users from "../../constants/users";

import close from "../../assets/png/close.png"
import "./index.css";

export const UsersData = () => {

  const [divs, setDivs] = useState(users);

  
  function deleteUser(divid) {
    console.log(divid);
    setDivs(divs.filter(div => div.id !== divid));
  };


    return (
        <div className="users_div">
        <h1 className="list_name">Users List {divs.length}</h1>
        <div className="users_container">
        {divs.map((elm) => (
                <div key={elm.id} className="userBox">
                <h1>{elm.firstName}</h1>
                <img src={elm.image} alt="" />
                <p><span>ID:</span> {elm.id}</p>
                <p><span>Age:</span> {elm.age}</p>
                <p><span>Birthday:</span> {elm.birthDate}</p>
                <button className="close_btn" onClick={(e) => deleteUser(elm.id)}><img src={close} title="Delete User" alt="Delete User"/></button>
              </div>
      ))}
        </div>
        </div>
    )
}


export default UsersData;
