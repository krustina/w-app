import React from "react";
import "../App.css";

const Weather = ({ weatherData }) => {
  const desc = weatherData.weather[0].main;

  // const desc = "Smoke";
  const imgUrl = `weather/${desc}.gif`;
  return (
    <div
      className="background-gif"
      style={{
        height: `100vh`,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: `cover`,
        overflow: `none`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <strong>{weatherData.name}</strong>
      </h3>
      <h3>{weatherData.main.temp.toFixed(0)}° C</h3>
      <h5>
        ↑ {weatherData.main.temp_max.toFixed(0)}° ↓{" "}
        {weatherData.main.temp_min.toFixed(0)}°
      </h5>
      <br />
      <h4>
        {weatherData.weather[0].main} <br />
      </h4>
    </div>
  );
};

export default Weather;
