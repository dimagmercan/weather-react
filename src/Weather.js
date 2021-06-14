import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feels: Math.round(response.data.main.feels_like),
      dayTemp: Math.round(response.data.main.temp_max),
      nightTemp: Math.round(response.data.main.temp_min),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
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
              <p className="date">
                {" "}
                <FormattedDate date={weatherData.date} />
              </p>
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
                <li className="text-capitalize">{weatherData.desc}</li>
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
                alt={weatherData.desc}
              />
            </div>
          </div>
          <div className="forecast-container"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3699d0fa6e271cc5f57b53331e37d692";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
