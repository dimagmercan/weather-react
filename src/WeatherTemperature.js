import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="temperature">{props.celsius}</span>
          <span className="units">
            °C |{" "}
            <a href="/" onClick={showFah}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>
          <span className="temperature">{fahrenheit()}</span>
          <span className="units">
            <a href="/" onClick={showCel}>
              °C
            </a>{" "}
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
