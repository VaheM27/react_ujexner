import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ROUTES from "../../Routes";

import "./Person.scss";

export const Person = () => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setPerson(res));
  }, [id]);

  return (
    <div className="personDetails">
      <button
        onClick={() =>
          navigate(
            id === "1"
              ? `/${ROUTES.PERSONAL}/6`
              : `/${ROUTES.PERSONAL}/${+id - 1}`
          )
        }
      >
        &#10140;
      </button>
      <img src={person?.data.avatar} alt="Person Image" />
      <div className="details">
        <p>- {person?.data.first_name}</p>
        <p>- {person?.data.last_name}</p>
        <p>- {person?.data.email}</p>
        <p>- {person?.support.text}</p>
        <p>
          -{" "}
          {person?.support.url.replace(
            "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
            "contentcaddy.io"
          )}
        </p>
      </div>
      <button
        onClick={() =>
          navigate(
            id === "6"
              ? `/${ROUTES.PERSONAL}/1`
              : `/${ROUTES.PERSONAL}/${+id + 1}`
          )
        }
      >
        &#10140;
      </button>
    </div>
  );
};
