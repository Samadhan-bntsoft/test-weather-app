import styled from "styled-components";

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 40px;
`;

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 2px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const CityWeatherLogo = styled.img`
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

const ErrorContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: red;
`;

export {
  Container,
  AppLabel,
  WeatherCondition,
  WeatherLogo,
  Location,
  Condition,
  WeatherInfoLabel,
  WeatherIcon,
  WeatherContainer,
  InfoContainer,
  WeatherInfoContainer,
  InfoIcon,
  InfoLabel,
  CityWeatherLogo,
  ChosseCityLabel,
  SearchBox,
  ErrorContainer,
};
