import React from "react";
import { useParams, Link } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Details.scss";

export const Details = () => {
  const { a, b, c, d, e, f, g } = useParams();

  return (
    <div className="details">
      <Link to={ROUTES.DASHBOARD} className="linkBtn">
        <button>&#8630;</button>
      </Link>
      <div className="info">
        <p>
          <span>Full Name:</span> {a}
        </p>
        <p>
          <span>Passport:</span> {b}
        </p>
        <p>
          <span>Zip Code:</span> {c}
        </p>
        <p>
          <span>Email:</span> {d}
        </p>
        <p>
          <span>Phone:</span> {e}
        </p>
        <p>
          <span>Address line 1:</span> {f}
        </p>
        <p>
          <span>Address line 2:</span> {g ? g : "Second Address Not Provided"}
        </p>
      </div>
    </div>
  );
};
