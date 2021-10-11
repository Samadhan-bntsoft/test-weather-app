import React, { useState } from "react";

import {
  WeatherCondition,
  WeatherLogo,
  Location,
  Condition,
  WeatherInfoLabel,
  WeatherInfoContainer,
} from "../ReusableComponent";
import { WeatherInfoComponent } from "../ReusableComponent/WeatherInfoComponent";

import {
  sunset,
  sunrise,
  humidity,
  wind,
  pressure,
  perfectDay,
} from "../icons";

const imgIcon = { sunset, sunrise, humidity, wind, pressure };

const getTime = (timeStamp) => {
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
    timeStamp * 1000
  ).getMinutes()}`;
};

function WeatherComponent({ weather }) {
  const objWeather = {
    sunset: getTime(weather?.sys["sunset"]),
    sunrise: getTime(weather?.sys["sunrise"]),
    humidity: weather?.main?.humidity,
    wind: weather?.wind?.speed,
    pressure: weather?.main?.pressure,
  };
  const WeatherName = ["humidity", "wind", "pressure"];
  const isDay = weather?.weather[0].icon?.includes("d");

  if (isDay) {
    WeatherName.unshift("sunset");
  } else {
    WeatherName.unshift("sunrise");
  }

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main.temp - 273)} °C`} </span>
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={perfectDay} />
      </WeatherCondition>
      <Location>{`${weather?.name} , ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather info </WeatherInfoLabel>
      <WeatherInfoContainer>
        {WeatherName.length == 4 &&
          WeatherName.map((item, i) => (
            <WeatherInfoComponent
              key={i}
              name={item}
              value={objWeather[item]}
              src={imgIcon[item]}
            />
          ))}
      </WeatherInfoContainer>
    </>
  );
}

export default WeatherComponent;
