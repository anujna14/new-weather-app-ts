import React, { useState } from "react";
import { WeatherContextType, ForecastType, ChildrenPropType } from "../types/WeatherTypes";

export const WeatherContext = React.createContext<WeatherContextType | null>(null);

const WeatherProvider = ({ children }: ChildrenPropType) => {
  const [weatherDetails, setWeatherDetails] = useState<ForecastType | null>(null);
  const [favourites, setFavourites] = useState<Array<ForecastType | null>>([]);

  const addWeatherDetails = (weather: ForecastType) => {
    setWeatherDetails({ ...weatherDetails, ...weather });
  };

  const changeFavouriteState = (weatherDetails: ForecastType) => {
    setWeatherDetails({ ...weatherDetails, isFavourite: !weatherDetails.isFavourite });
  };

  const addToFavourite = (weatherDetails: ForecastType) => {
    setFavourites((prevState) => [...prevState, { ...weatherDetails }]);
  };

  const removeFavourite = (id: number) => {
    const filteredArray = favourites.filter((fav: any) => fav.id !== id);
    setFavourites(filteredArray);
  };

  const removeAllFav = () =>{
    setFavourites([])
  }
  return (
    <WeatherContext.Provider value={{ weatherDetails, addWeatherDetails, changeFavouriteState, favourites, addToFavourite, removeFavourite, removeAllFav }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
