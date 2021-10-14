import React from "react";
import "../App.css";

const Weather = ({ weatherData }) => {
  //   const desc = weatherData.weather[0].main;
  const desc = "Smoke";
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
      <h1 style={{ margin: 0 }}>{weatherData.name}</h1>
      <p>{weatherData.main.temp}° C</p>
      <p>{weatherData.weather[0].main}</p>
    </div>
  );
};

export default Weather;
