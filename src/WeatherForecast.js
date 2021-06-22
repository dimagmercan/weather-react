import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3699d0fa6e271cc5f57b53331e37d692";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <h4 className="card-title mb-3">Thursday</h4>
              <WeatherIcon code="01d" size={52} />
              <h6 className="card-subtitle mt-3 text-muted">
                <strong>19°</strong> 10°
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
