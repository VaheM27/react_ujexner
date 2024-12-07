import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Box.scss";

const Box = ({ fName, mail, phone, pass, zip, address1, address2 }) => {
  return (
    <div className="box">
      <p>{fName}</p>
      <p>{mail}</p>
      <p>{phone}</p>
      <Link
        to={`${ROUTES.DETAILS}/${fName}/${pass}/${zip}/${mail}/${phone}/${address1}/${address2}`}
      >
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Box;
