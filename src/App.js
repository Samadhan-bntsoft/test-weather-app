import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Component/CityComponent";
import WeatherComponent from "./Component/WeatherComponent";

const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 2px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background:white;
`;
const AppLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
`;

const API_KEY = 'fe4feefa8543e06d4f3c66d92c61b69c'
  
function App() {
  const [city, setcity] = useState();
  const [weather, setweather] = useState()

  const fetchWeather = async (e) => {
    e.preventDefault();
const res = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
);
    setweather(res.data);
  }

    return (
      <Container>
        <AppLabel>Weather App</AppLabel>
        {weather ? (
          <WeatherComponent weather={weather} />
        ) : (
          <CityComponent setcity={setcity} fetchWeather={fetchWeather} />
        )}
      </Container>
    );
};

export default App;
