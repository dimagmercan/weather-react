import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`the weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=3699d0fa6e271cc5f57b53331e37d692`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello from Weather</h2>
    </div>
  );
}
