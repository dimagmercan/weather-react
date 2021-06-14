import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-3">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div className="col-4">
          <h2>
            <span className="temperature">{props.data.temp}</span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </h2>
          <ul>
            <li>Feels like {props.data.feels}°</li>
            <li className="text-capitalize">{props.data.desc}</li>
            <li>
              Day {props.data.dayTemp}°↑ Night {props.data.nightTemp}°↓
            </li>
            <li>Wind Speed: {props.data.wind} m/s</li>
          </ul>
        </div>
        <div className="col-4">
          <img src={props.data.imgURL} width="130px" alt={props.data.desc} />
        </div>
      </div>
      <div className="forecast-container"></div>
    </div>
  );
}
