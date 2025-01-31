import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWeekData } from "../../store/weeklyDataSlice/weeklyDataSlice";
import { fetchWeeklyData } from "../../store/weeklyDataSlice/api";
import { kelvinToCelsius, kelvinToFar } from "../../helpers/tempConverter";
import { ROUTES } from "../../Routes";

import "./WeeklyCard.css";

const WeeklyCard = ({ tempType }) => {
  const dispatch = useDispatch();
  const { weeklyData, loading } = useSelector(getWeekData);

  useEffect(() => {
    dispatch(fetchWeeklyData("yerevan"));
  }, []);

  return (
    <div className="weeklyData">
      <Link to={ROUTES.HOME}>
      <img className="back" src={require("../../assets/back.png")} />
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <h1>{weeklyData?.city?.name}</h1>
          <div className="weekdata">
            {weeklyData?.list
              ?.filter(
                (elm, index, arr) =>
                  arr.findIndex(
                    (e) => e.dt_txt.split(" ")[0] === elm.dt_txt.split(" ")[0]
                  ) === index
              )
              .map((elm, i) => (
                <div className="box" key={i}>
                  <p>{elm.dt_txt.split(" ")[0]}</p>
                  {tempType === "celsius" ? (
                    <p>{Math.trunc(kelvinToCelsius(elm.main.temp || 0))}°C</p>
                  ) : (
                    <p>{Math.trunc(kelvinToFar(elm.main.temp || 0))}°F</p>
                  )}
                  <p>{elm.weather[0].main}</p>
                  <img
                    src={`https://openweathermap.org/img/w/${elm.weather[0].icon}.png`}
                    alt={`Weather type img in ${weeklyData?.city?.name}`}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyCard;