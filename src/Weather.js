import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coords: response.data.coord,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feels: Math.round(response.data.main.feels_like),
      dayTemp: Math.round(response.data.main.temp_max),
      nightTemp: Math.round(response.data.main.temp_min),
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3699d0fa6e271cc5f57b53331e37d692";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container border border-2 rounded p-3">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search places"
                  autoFocus="off"
                  onChange={handleCityChange}
                />
                <input type="submit" value="🔍" className="btn btn-search " />
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coords={weatherData.coords} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
