import React, { useContext } from "react";
import Favourites from "../Components/Favourites/Favourites";
import NoFavouritesFound from "../Components/Favourites/NoFavouritesFound";
import { WeatherContext } from "../Context/WeatherContext";
import { WeatherContextType } from "../types/WeatherTypes";

const Favourite = () => {
  const { favourites } = useContext(WeatherContext) as WeatherContextType;
  return <>{favourites.length === 0 ? <NoFavouritesFound/> : <Favourites />}</>;
};

export default Favourite;
