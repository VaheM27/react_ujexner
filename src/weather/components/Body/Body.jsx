import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Body.scss";

const Body = ({ location, type }) => {
  const [data, setData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);

  const kelvinToCelsius = (num) => {
    return num - 273.15;
  };

  const kelvinToFar = (num) => {
    return ((num - 273.15) * 9) / 5 + 32;
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        await axios({
          baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ba8608127335c6068af01ea8e811dad7`,
          method: "GET",
        }).then((res) => setData(res.data));
        await axios({
          baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=ba8608127335c6068af01ea8e811dad7`,
          method: "GET",
        }).then((res) => setWeeklyData(res.data));
      } catch (e) {
        const error = e.response.data.message;
        alert(error);
      }
    };
    getWeather();
  }, [location]);
  console.log(weeklyData);

  const icon = `https://openweathermap.org/img/w/${data?.weather[0].icon}.png`;

  return (
    <div className="body">
      {data !== null && weeklyData !== null && (
        <div>
          <div className="today">
            <p>{data.name}</p>
            {type === "celsius" ? (
              <p>{Math.trunc(kelvinToCelsius(data.main.temp || 0))}°C</p>
            ) : (
              <p>{Math.trunc(kelvinToFar(data.main.temp || 0))}°F</p>
            )}
            <p
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
              }}
            >
              {data.weather[0].main}
              <img src={icon} alt="" />
            </p>
          </div>
          <div className="weekly">
            <div className="box">
              <p>
                {weeklyData.list[0].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[0].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[0].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>

            <div className="box">
              <p>
                {weeklyData.list[3].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[3].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[3].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>
            <div className="box">
              <p>
                {weeklyData.list[11].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[11].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[11].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>
            <div className="box">
              <p>
                {weeklyData.list[19].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[19].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[19].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>
            <div className="box">
              <p>
                {weeklyData.list[27].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[27].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[27].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>
            <div className="box">
              <p>
                {weeklyData.list[35].dt_txt.split(" ")[0].replaceAll("-", "/")}:
              </p>
              {type === "celsius" ? (
                <p>
                  {Math.trunc(
                    kelvinToCelsius(weeklyData.list[35].main.temp || 0)
                  )}
                  °C
                </p>
              ) : (
                <p>
                  {Math.trunc(kelvinToFar(weeklyData.list[35].main.temp || 0))}
                  °F
                </p>
              )}
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
