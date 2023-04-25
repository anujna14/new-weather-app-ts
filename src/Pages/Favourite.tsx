import React, { useContext } from "react";
import Favourites from "../Components/Favourites/Favourites";
import NoContentFound from "../Components/UI/NoContentFound";
import { WeatherContext } from "../Context/WeatherContext";
import { WeatherContextType } from "../types/WeatherTypes";

const Favourite = () => {
  const { favourites } = useContext(WeatherContext) as WeatherContextType;
  return <>{favourites.length === 0 ? <NoContentFound message="No Favourites Found"/> : <Favourites />}</>;
};

export default Favourite;
