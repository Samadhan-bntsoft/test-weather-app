import React, { useState } from "react";
import perfectDay from "../icons/perfect-day.svg";

import {
  WeatherCondition,
  WeatherLogo,
  Location,
  Condition,
  WeatherInfoLabel,
  WeatherInfoContainer,
} from "../ReusableComponent";
import { WeatherInfoComponent } from "../ReusableComponent/WeatherInfoComponent";

import sunset from "../icons/sunset.svg";
import sunrise from "../icons/sunrise.svg";
import humidity from "../icons/humidity.svg";
import wind from "../icons/wind.svg";
import pressure from "../icons/pressure.svg";

const imgIcon = { sunset, sunrise, humidity, wind, pressure };

const getTime = (timeStamp) => {
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
    timeStamp * 1000
  ).getMinutes()}`;
};

function WeatherComponent(props) {
  const { weather } = props;

  const WeatherName = ["humidity", "wind", "pressure"];
  const isDay = weather?.weather[0].icon?.includes("d");
  console.log(isDay);
  if (isDay) {
    WeatherName.unshift("sunset");
  } else {
    WeatherName.unshift("sunrise");
  }

  const objWeather = {
    sunset,
    sunrise,
    humidity,
    wind,
    pressure,
  };

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
        {/* <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        /> */}
        {WeatherName.length == 4 &&
          WeatherName.map((item, i) => (
            <WeatherInfoComponent
              key={i}
              name={item}
              value={getTime(weather?.sys[item])}
              src={imgIcon[item]}
            />
          ))}

        {/* <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
       <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} /> */}
      </WeatherInfoContainer>
    </>
  );
}

export default WeatherComponent;
