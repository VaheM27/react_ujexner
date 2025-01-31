import React from "react";

const Weather = () => {
  return (
    <div>
        <div className="weather-container">
            <div className="main-section">
                <div className="weather-info">
                    <div className="location">
                        <h3>New York - USA</h3>
                    </div>
                    <div className="condition">
                        <h1>Overcast</h1>
                    </div>
                </div>

                <div className="weather-hours">
                    <div className="hour-card">
                        <div className="hour-time">
                            <p>09:00</p>
                        </div>
                        <div className="hour-condition">
                        <i class="fa-solid fa-cloud"></i>
                        </div>
                        <div className="hour-temp">
                            <h2>10 C</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-section">
                <div className="search-box">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder='New York' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="temp-info">
                    <h1>10 C</h1>
                    <p>
                    <i class="fa-solid fa-wind"></i> NE 40 km/h
                    </p>
                </div>

                <div className="forecast-days">
                    <div className="forecast-heading">The Next Days Forecast</div>
                    <div className="forecast-item">
                        <div className="forecast-details">
                            <div className="forecast-icon">
                            <i class="fa-solid fa-cloud"></i>
                            </div>
                            <div className="details">
                                <h2>monday, December 16</h2>
                                <p>overcast</p>
                            </div>
                        </div>
                        <div className='forecast-temp'>
                            <div className="temp-display">
                                <h2>10 C</h2>
                                <h2>5 C</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Weather