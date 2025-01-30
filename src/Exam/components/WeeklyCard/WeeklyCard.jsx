import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWeekData } from "../../store/weeklyDataSlice/weeklyDataSlice";
import { fetchWeeklyData } from "../../store/weeklyDataSlice/api";
import { kelvinToCelsius, kelvinToFar } from "../../helpers/tempConverter";
import { ROUTES } from "../../Routes";

import "./WeeklyCard.scss";

const WeeklyCard = ({ tempType }) => {
  const dispatch = useDispatch();
  const { weeklyData, loading } = useSelector(getWeekData);

  useEffect(() => {
    dispatch(fetchWeeklyData("yerevan"));
  }, []);

  return (
    <div className="weeklyData">
      <Link to={ROUTES.HOME}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0,0,256,256"
        >
          <g fill="#ffffff">
            <g transform="scale(5.12,5.12)">
              <path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path>
            </g>
          </g>
        </svg>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <h1>{weeklyData?.city?.name}</h1>
          <div className="data">
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
