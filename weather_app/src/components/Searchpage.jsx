import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Homepage from "./Homepage";
import Searchbox from "./Searchbox";

function Searchpage() {
  const query = new URLSearchParams(useLocation().search);
  const searchingWord = query.get("city");

  const [result, setResult] = useState({});

  function getDatas(data) {
    return {
      name: data.name,
      icons: data.weather[0].icon,
      temp: (data.main.temp - 273.15).toFixed(1),
      feel: (data.main.feels_like - 273.15).toFixed(1),
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      main: data.weather[0].main,
      description: data.weather[0].description,
    };
  }

  async function getDataFromApi() {
    return await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchingWord +
        "&appid=af0afb34cd49310393178e125b682863"
    )
      .then((response) => response.json())
      .then((data) => getDatas(data))
      .catch((err) => err);
  }

  useEffect(() => {
    getDataFromApi().then((city) => setResult(city));
  }, []);

  return result.name === "TypeError" ? (
    <Homepage />
  ) : (
    <div
      className='homepage'
      style={{
        backgroundImage: "url(" + "../images/" + result.icons + ".png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Searchbox />

      <div className='container'>
        <div className='top'>
          <div className='cityName'>
            <p>{result.name}</p>
          </div>
          <div className='temp'>
            <h1>{result.temp}</h1>
            <div className='description'>
              <p>{result.description}</p>
            </div>
          </div>

          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>{result.feel}°C</p>
              <p>Feels Like</p>
            </div>

            <div className='wind'>
              <p className='bold'>{result.windSpeed} MPH</p>
              <p>Wind Speed</p>
            </div>

            <div className='humidity'>
              <p className='bold'>{result.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
