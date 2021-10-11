import React from "react";
import { InfoContainer, InfoIcon, InfoLabel } from "./index";

export const WeatherInfoComponent = ({ name, value, src }) => {
  return (
    <InfoContainer>
      <InfoIcon src={src}></InfoIcon>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
