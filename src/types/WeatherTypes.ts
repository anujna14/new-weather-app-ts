import { ReactNode } from "react";

export interface ForecastType {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: 721;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  isFavourite: boolean;
}

export type WeatherContextType = {
  weatherDetails: ForecastType | null;
  addWeatherDetails: (weather: ForecastType) => void;
//   isFavourite: (id: number) => void;
};


export type SearchContextType  = {
    searchedValue: string;
    handleSearchedValue: (searchVal: string) => void,

}

export interface ChildrenPropType {
    children?: ReactNode;
  }