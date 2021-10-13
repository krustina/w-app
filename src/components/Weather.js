import React from "react";

const Weather = ({ dt, temp_min, temp_max, main, icon }) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <>
      <p>{main}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <p>
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
      {/* minimum temperature */}
      <p>Min: {temp_min}</p>
      {/* maximum temperature */}
      <p>Max: {temp_max}</p>
    </>
  );
};

export default Weather;
