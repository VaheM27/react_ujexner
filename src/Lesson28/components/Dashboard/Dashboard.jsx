import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors/userSelectors";
import { Link } from "react-router-dom";

import "./Dashboard.scss";
import { ROUTES } from "../../Routes";

const Dashboard = () => {
  const users = useSelector(getUsers);

  return (
    <div className="dashboard">
      <Link className="link" to={ROUTES.HOME}>
        <button className="btn">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO2YT0rDQBSH30LdKEI9g//2broo2oV04UE8gFA9SMSeouK6hIoIXsGeoiJ1peAnpVOQ0DKJ8yaZkfkOkPy+ZF7eexFJJBKJfwFwIbECXAJfEhvABnCLQWIC2APGy/BRCQAHwOR3+GgEgB7wVgwfhQCLYv1cFT5oARbFmq0LHrQA0AJy9PgAXs01b4Bjn+H3zc188wJ0tMOfA1Pq4xsYAFvei9UzT/MeE7PAnGfnN9HAESpy5yRQcxGvq4l2iJ/RKoydBbQbGbANnALDkhJHKhI+RgngqoTAtZqAj2EOuLcIjFQFtMdp4MwiMFEX0FxogB2LwEw/veJKCexaBN71kysu9UC3kSOk9VsFeKi9iLUA+tjpS0iYRtYt8eSXHIYQ+q/kEgIOw9yJRCyQSSg0stBoUjH8o/NKqU2FM58BmxIaJcLnwRTsKgphZ2ZNHZlG1vx3PpFIJBISKz88ryRlveSuYQAAAABJRU5ErkJggg=="
            alt="undo"
          />
          Back
        </button>
      </Link>
      <div className="table">
        <div className="card topCard">
          <p className="imagePar">Image</p>
          <p>Name</p>
          <p>SrName</p>
          <p>Age</p>
        </div>
      </div>
      <div className="table">
        {users?.map((elm) => {
          return (
            <div className="card" key={elm.id}>
              <img src={elm.photo} alt="Profile Picture" />
              <p>{elm.name}</p>
              <p>{elm.srName}</p>
              <p>{elm.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
