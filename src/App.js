import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { REACT_APP_API_URL, REACT_APP_API_KEY } from "./api/config";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          // console.log("WEATHER --> ", result);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
