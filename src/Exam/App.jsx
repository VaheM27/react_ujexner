import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "./store/dataSlice/dataSlice";
import { fetchData } from "./store/dataSlice/api";
import { kelvinToCelsius, kelvinToFar } from "./helpers/tempConverter";

import "./App.scss";

const App = () => {
  const [type, setType] = useState("celsius");
  const dispatch = useDispatch();
  const { data, loading } = useSelector(getWeatherData);
  useEffect(() => {
    dispatch(fetchData("Yerevan"));
  }, []);

  const changeTempValue = (e) => {
    setType(e.target.id);
  };

  return (
    <div className="app">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value.trim() && dispatch(fetchData(e.target[0].value));
          e.target.reset();
        }}
      >
        <div className="inputs">
          <input type="text" placeholder="Search..." />
          <input type="submit" />
        </div>
        <div className="radioBtns">
          <input
            type="radio"
            id="celsius"
            name="scales"
            onClick={changeTempValue}
            defaultChecked
          />
          <label htmlFor="celsius">°C</label>
          <input
            type="radio"
            id="farenheit"
            name="scales"
            onClick={changeTempValue}
          />
          <label htmlFor="farenheit">°F</label>
        </div>
      </form>
      <div className="todaysWeather">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="data">
            <h1>{data.name}</h1>
            {type === "celsius" ? (
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
                      alt={`Weather type image in ${data.name}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
