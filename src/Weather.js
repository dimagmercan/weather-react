import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Stockholm",
    day: "13 Jun 2021",
    time: "12:24",
    temp: 15,
    desc: "Sunny",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feels: 13,
    dayTemp: 16,
    nightTemp: 6,
    wind: 4,
  };

  return (
    <div className="Weather">
      <div className="container border border-2 rounded p-3">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="input-group mb-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search places"
                  aria-label="Search places"
                  aria-describedby="button-addon2"
                />
                <button className="btn-search" type="button">
                  <span>🔍</span>
                </button>
                <button className="btn-location" type="button">
                  <span>📍</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <p className="day">{weatherData.day}</p>
            <p className="time">{weatherData.time}</p>
          </div>
          <div className="col-4">
            <h2>
              <span className="temperature">{weatherData.temp}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </h2>
            <ul>
              <li>Feels like {weatherData.feels}°</li>
              <li>{weatherData.desc}</li>
              <li>
                Day {weatherData.dayTemp}°↑ Night {weatherData.nightTemp}°↓
              </li>
              <li>Wind Speed: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={weatherData.imgURL}
              width="130px"
              alt="{weatherData.desc}"
            />
          </div>
        </div>
        <div className="forecast-container"></div>
      </div>
    </div>
  );
}
