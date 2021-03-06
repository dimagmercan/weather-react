import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temp} />

          <ul>
            <li>Feels like {props.data.feels}°</li>
            <li className="text-capitalize">{props.data.desc}</li>
            <li>
              Day {props.data.dayTemp}°↑ Night {props.data.nightTemp}°↓
            </li>
            <li>Wind Speed: {props.data.wind} m/s</li>
          </ul>
        </div>
        <div className="col-4 ">
          <WeatherIcon code={props.data.icon} size={130} />
        </div>
      </div>
      <div className="forecast-container"></div>
    </div>
  );
}
