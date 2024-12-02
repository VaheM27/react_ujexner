import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Staff.scss";

const Staff = () => {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => setPersonal(response.data));
  }, []);

  return (
    <div className="employees">
      {personal.map((person) => {
        return (
          <div key={person.id} className="employeeCard">
            <Link to={`/${ROUTES.PERSONAL}/${person.id}`} className="staffLink">
              <img
                className="employeeImg"
                src={person.avatar}
                alt={person.name}
              />
              <p className="employeeName">
                {person.first_name + " " + person.last_name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Staff;
