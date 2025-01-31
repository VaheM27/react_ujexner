import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../store/dataSlice/dataSlice";
import { fetchData } from "../../store/dataSlice/api";
import { kelvinToCelsius, kelvinToFar } from "../../helpers/tempConverter";
import { ROUTES } from "../../Routes";

import "./DailyCard.css";

const DailyCard = ({ tempType }) => {
  const { data, loading } = useSelector(getWeatherData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("Yerevan"));
  }, []);

  return (
    <div>
      <Link className="link" to={ROUTES.FORCAST}>
        <div className="todaysWeather">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="data">
              <h1>{data.name}</h1>
              {tempType === "celsius" ? (
                <p>{Math.trunc(kelvinToCelsius(data?.main?.temp || 0))}°C</p>
              ) : (
                <p>{Math.trunc(kelvinToFar(data?.main?.temp || 0))}°F</p>
              )}
              <div className="weatherType">
                {data?.weather?.map((elm, index) => {
                  return (
                    <div className="info" key={index}>
                      <p>{elm.main}</p>
                      <img
                        src={`https://openweathermap.org/img/w/${elm.icon}.png`}
                        alt={`Weather type img in ${data.name}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default DailyCard;
