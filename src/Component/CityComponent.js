import React from "react";
import {
  CityWeatherLogo,
  ChosseCityLabel,
  SearchBox,
  ErrorContainer,
} from "../ReusableComponent";
import perfectDay from "../icons/perfect-day.svg";



function CityComponent({ setcity, seterror,error, fetchWeather }) {
  return (
    <>
      <CityWeatherLogo src={perfectDay} />
      <ChosseCityLabel>Find Weather of your city</ChosseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="city"
          onChange={(e) => {
            seterror("");
            setcity(e.target.value);
          }}
        />
        <button>search</button>
      </SearchBox>
      <ErrorContainer>{error ? error : ""}</ErrorContainer>
    </>
  );
}

export default CityComponent;
