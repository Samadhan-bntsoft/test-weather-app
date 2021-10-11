import axios from "axios";
import { useState } from "react";
import CityComponent from "./Component/CityComponent";
import WeatherComponent from "./Component/WeatherComponent";
import { Container, AppLabel } from "./ReusableComponent";

function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();

    var alphaExp = /^[a-zA-Z]+$/;
    if (city.length == 0 || !city.match(alphaExp)) {
      seterror("Please enter only alphabets");
    } else {
      await axios
        .get(
          `${process.env.REACT_APP_HOST_API_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setweather(res.data);
        })
        .catch((error) => {
          seterror(error.message);
        });
    }
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent
          setcity={setcity}
          seterror={seterror}
          error={error}
          fetchWeather={fetchWeather}
        />
      )}
    </Container>
  );
}

export default App;
