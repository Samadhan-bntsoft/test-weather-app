import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChosseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input{
padding:10px;
font-size:14px;
border:none;
outline:none;
font-weight:bold;
  }
    & button{
        color:white;
        background-color:black;
padding:10px;
font-size:14px;
border:none;
outline:none;
font-weight:bold;
cursor:pointer;
  }
`;

function CityComponent({ setcity, fetchWeather }) {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChosseCityLabel>Find Weather of your city</ChosseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="city"
          onChange={(e) => setcity(e.target.value)}
        />
        <button>search</button>
      </SearchBox>
    </>
  );
}

export default CityComponent;
