import React, { useState, ReactNode } from "react";
import { WeatherContextType, ForecastType, ChildrenPropType } from "../types/WeatherTypes";


export const WeatherContext = React.createContext<WeatherContextType | null>(null);

const WeatherProvider = ({ children }: ChildrenPropType) => {
  const [weatherDetails, setWeatherDetails] = useState<ForecastType | null>(null);

  const addWeatherDetails = (weather: ForecastType) => {
    setWeatherDetails({ ...weatherDetails, ...weather });
  };
  return <WeatherContext.Provider value={{ weatherDetails, addWeatherDetails }}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
