import React from "react";
import { InfoContainer, InfoIcon, InfoLabel } from "./index";

export const WeatherInfoComponent = (props) => {
  const { name, value, src } = props;

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
