import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";
import axios from "axios";

import "./App.scss";

const App = () => {
  const [path, setPath] = useState("yerevan");
  const [dailyWeather, setDailyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [celFar, setCelFar] = useState(true);

  const buildUrl = (endpoint) =>
    `https://api.openweathermap.org/data/2.5/${endpoint}?q=${path}&appid=ba8608127335c6068af01ea8e811dad7`;

  const changeCelsiusToFahrenheit = () => setCelFar((prev) => !prev);

  const searchCity = (e) => {
    e.preventDefault();
    setPath(e.target[0].value.toLowerCase());
    e.target.reset();
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        const [weather, weekWeather] = await Promise.all([
          // Она ждет, пока оба запроса завершатся, и возвращает результаты.
          axios.get(buildUrl("weather")),
          axios.get(buildUrl("forecast")),
        ]);
        setDailyWeather(weather.data);
        setWeeklyWeather(weekWeather.data);
      } catch (error) {
        alert(error);
      }
    };
    getWeather();
  }, [path]);

  return (
    <div>
      <Nav
        searchCity={searchCity}
        changeCelsiusToFahrenheit={changeCelsiusToFahrenheit}
        celFar={celFar}
      />
      <Body
        dailyWeather={dailyWeather}
        weeklyWeather={weeklyWeather}
        celFar={celFar}
      />
    </div>
  );
};

export default App;
