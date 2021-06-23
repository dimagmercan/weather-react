import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div class="card text-center">
      <div class="card-body">
        <h4 className="card-title mb-3">{day()}</h4>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <h6 className="card-subtitle mt-3 text-muted">
          <strong>{Math.round(props.data.temp.max)}°</strong>{" "}
          {Math.round(props.data.temp.min)}°
        </h6>
      </div>
    </div>
  );
}
