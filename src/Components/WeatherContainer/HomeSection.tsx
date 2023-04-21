import { Box, Button, Card, CardMedia, IconButton, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useEffect, useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SearchContext } from "../../Context/SearchContext";
import { ForecastType, SearchContextType } from "../../types/WeatherTypes";
import { WeatherContext } from "../../Context/WeatherContext";
import { WeatherContextType } from "../../types/WeatherTypes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const REACT_APP_WEB_URL = process.env.REACT_APP_WEB_URL;

const HomeSection = () => {
  const { searchedValue } = useContext(SearchContext) as SearchContextType;
  const { weatherDetails, addWeatherDetails, changeFavouriteState, addToFavourite, removeFavourite } = useContext(
    WeatherContext
  ) as WeatherContextType;

  useEffect(() => {
    getWeatherDetails();
  }, [searchedValue]);

  const getWeatherDetails = async () => {
    try {
      let response = await axios.get(`${REACT_APP_WEB_URL}?q=${searchedValue}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`);
      addWeatherDetails({ ...response.data, isFavourite: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  };

  let weatherUrl = `https://openweathermap.org/img/wn/${weatherDetails?.weather[0]?.icon}@2x.png`;

  const handleAddtoFav = (weatherDetails: ForecastType) => {
    changeFavouriteState(weatherDetails);
    removeFavourite(weatherDetails?.id);
  };
  const removeFav = (weatherDetails: ForecastType) => {
    changeFavouriteState(weatherDetails);
    addToFavourite(weatherDetails);
  };
  return !weatherDetails ? (
    <h1>No data Found</h1>
  ) : (
    <>
      <Box sx={{ padding: "20px", margin: "20px" }}>
        <Typography sx={{ fontWeight: "Bold", paddingLeft: "8px", fontSize: "22px" }}>{weatherDetails?.name}</Typography>
        <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
          {weatherDetails.isFavourite ? (
            <>
              <IconButton onClick={() => handleAddtoFav(weatherDetails)}>
                <FavoriteIcon sx={{ color: "#F6BA6F" }} />
              </IconButton>
              <Typography component="span" sx={{ color: "#F6BA6F" }}>
                Added to Favourite
              </Typography>
            </>
          ) : (
            <>
              <IconButton>
                <FavoriteBorderIcon sx={{ color: "#F6BA6F" }} onClick={() => removeFav(weatherDetails)} />
              </IconButton>
              <Typography component="span" sx={{ color: "#F6BA6F" }}>
                Add to Favourite
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box>
        <Card elevation={0} sx={{ background: "transparent" }}>
          <CardMedia sx={{ height: 100, width: 150, left: 0, margin: "0 auto" }} image={weatherUrl} title="url" />
          <Box sx={{ textAlign: "center" }}>
            <Typography component="span" sx={{ fontSize: "60px", display: "inline-block", color: "#fff", fontWeight: "Bold" }}>
              {weatherDetails?.main?.temp}
            </Typography>
            <ToggleButtonGroup exclusive aria-label="text alignment" color="success">
              <ToggleButton value="left" aria-label="left aligned" sx={{ color: "#ccc", borderRadius: "0px" }}>
                &deg;C
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered" sx={{ color: "#ccc", borderRadius: "0px" }}>
                &deg;F
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{ color: "#fff", padding: "20px", textTransform: "capitalize" }} variant="h5">
              {weatherDetails?.weather[0]?.description}
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default HomeSection;
