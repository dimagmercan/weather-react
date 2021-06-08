import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  function displayWeather(response) {
    setMessage(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidy: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={response.data.weather[0].description}
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3699d0fa6e271cc5f57b53331e37d692`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="search"
          placeholder="Type a city"
          onChange={updateCity}
        />{" "}
        <input type="submit" value="Search" />
      </form>
      <p>{message}</p>
    </div>
  );
}
