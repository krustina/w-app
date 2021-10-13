import React from "react";

const Weather = ({ weatherData }) => (
  <div>
    <div>
      <h1>{weatherData.name}</h1>
      <p>{weatherData.main.temp}° C</p>
      <p>{weatherData.weather[0].main}</p>
    </div>
  </div>
);

export default Weather;
