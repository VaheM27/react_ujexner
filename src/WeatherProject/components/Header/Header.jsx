import axios from "axios";
import { useEffect, useState } from "react";
import fahrenheitCelsius from "../../fahrenheit";

import "./Header.scss";

const Header = () => {
  const [weatherData1, setWeatherData1] = useState([]);

  useEffect(() => {
    const weatherDataFunction1 = () => {
      axios(
        "https://api.openweathermap.org/data/2.5/weather?q=yerevan&appid=ba8608127335c6068af01ea8e811dad7"
      ).then((res) => {
        setWeatherData1(res.data);
      });
    };
    weatherDataFunction1();
  }, []);

  return (
    <div className="container header">
      <p>{weatherData1?.name}</p>
      <p>{fahrenheitCelsius(weatherData1?.main?.temp)}</p>
    </div>
  );
};

export default Header;
