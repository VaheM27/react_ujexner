import axios from "axios";
import { useEffect, useState } from "react";
import fahrenheitCelsius from "../../fahrenheit";

import "./Header.scss";

const Header = () => {
  const [weatherData1, setWeatherData1] = useState([]);
  const [weatherData2, setWeatherData2] = useState([]);
  const [icon, setIcon] = useState([]);

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

  useEffect(() => {
    const weatherDataFunction2 = () => {
      axios(
        "https://api.openweathermap.org/data/2.5/forecast?q=yerevan&appid=ba8608127335c6068af01ea8e811dad7"
      ).then((res) => {
        setWeatherData2(res.data);
      });
    };
    weatherDataFunction2();
  }, []);

  useEffect(() => {
    const iconFunction = () => {
      axios("https://openweathermap.org/img/w/02n.png").then((res) => {
        setIcon(res.data);
      });
    };
    iconFunction();
  }, []);

  return (
    <div className="container header">
      <p>{weatherData1?.name}</p>
      <p>{fahrenheitCelsius(weatherData1?.main?.temp)}</p>
      {/* <p>{weatherData2?.cod}</p> */}
      <img src={`https://openweathermap.org/img/w/02n.png`} ></img>
    </div>
  );
};

export default Header;
