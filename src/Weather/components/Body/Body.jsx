import "./Body.scss";

const Body = ({ dailyWeather, weeklyWeather, celFar }) => {
  if (!dailyWeather) return <p>Loading weather data...</p>;

  const icon = (path) => `https://openweathermap.org/img/w/${path}.png`;

  const formatTemperature = (temp, isCelsius) =>
    `${Math.round(
      isCelsius ? temp - 273.15 : ((temp - 273.15) * 9) / 5 + 32
    )}°${isCelsius ? "C" : "F"}`;

  return (
    <div className="bodyContainer">
      <div className="weather-body">
        <div className="left-side">
          <h2>{dailyWeather?.name}</h2>
          <p>{formatTemperature(dailyWeather?.main?.temp, celFar)}</p>
          <img
            src={icon(dailyWeather?.weather?.[0]?.icon)}
            alt={dailyWeather?.weather?.[0]?.main}
          />
          <p>{dailyWeather?.weather?.[0]?.main}</p>
        </div>
        <div className="right-side">
          <table>
            <tbody>
              {weeklyWeather?.list?.slice(0, 6).map((elm, index) => (
                <tr key={index}>
                  <td>{elm?.dt_txt?.split(" ")[1]}</td>
                  <td>{formatTemperature(elm?.main?.temp, celFar)}</td>
                  <td>
                    <img
                      src={icon(elm?.weather?.[0]?.icon)}
                      alt={elm?.weather?.[0]?.main}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
