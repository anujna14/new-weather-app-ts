import { Box, Card, CardMedia, IconButton, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useEffect, useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SearchContext } from "../../Context/SearchContext";
import { ForecastType, SearchContextType } from "../../types/WeatherTypes";
import { WeatherContext } from "../../Context/WeatherContext";
import { WeatherContextType } from "../../types/WeatherTypes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import NoContentFound from "../UI/NoContentFound";

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const REACT_APP_WEB_URL = process.env.REACT_APP_WEB_URL;

const ButtonStyle = {
  color: "#ccc",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#111",
  },
};

const HomeSection = () => {
  const [fahrenheit, setFahrenheit] = useState({
    isFahrenheit: false,
    fahrenheit: "",
  });
  const { searchedValue } = useContext(SearchContext) as SearchContextType;
  const { weatherDetails, addWeatherDetails, addToFavourite, removeFavourite } = useContext(WeatherContext) as WeatherContextType;

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
    addWeatherDetails({ ...weatherDetails, isFavourite: true });
    addToFavourite({ ...weatherDetails, isFavourite: true });
  };
  const removeFav = (weatherDetails: ForecastType) => {
    console.log("Am calling in....");
    addWeatherDetails({ ...weatherDetails, isFavourite: false });
    removeFavourite(weatherDetails?.id);
  };

  const convertToFahrenheit = (celsius: number) => {
    const fahrenheit = ((9 * celsius + 32 * 5) / 5).toFixed(2);
    setFahrenheit({
      fahrenheit: fahrenheit,
      isFahrenheit: true,
    });
  };
  const convertTocelsius = () => {
    setFahrenheit({
      fahrenheit: "",
      isFahrenheit: false,
    });
  };

  return !weatherDetails ? (
    <NoContentFound message="No Result Found, Please Enter a city!!" />
  ) : (
    <>
      <Box sx={{ padding: "20px", margin: "20px" }}>
        <Typography sx={{ fontWeight: "Bold", paddingLeft: "8px", fontSize: "22px" }}>{weatherDetails?.name}</Typography>
        <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
          {weatherDetails.isFavourite ? (
            <>
              <IconButton>
                <FavoriteIcon sx={{ color: "#F6BA6F" }} onClick={() => removeFav(weatherDetails)} />
              </IconButton>
              <Typography component="span" sx={{ color: "#F6BA6F" }}>
                Added to Favourite
              </Typography>
            </>
          ) : (
            <>
              <IconButton>
                <FavoriteBorderIcon sx={{ color: "#F6BA6F" }} onClick={() => handleAddtoFav(weatherDetails)} />
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
          <CardMedia sx={{ height: 100, width: 150, left: 0, margin: "0 auto", color: "#fff" }} image={weatherUrl} color="#fff" title="url" />
          <Box sx={{ textAlign: "center" }}>
            {!fahrenheit.isFahrenheit ? (
              <Typography component="span" sx={{ fontSize: "60px", display: "inline-block", color: "#fff", fontWeight: "Bold" }}>
                {weatherDetails?.main?.temp}
              </Typography>
            ) : (
              <Typography component="span" sx={{ fontSize: "60px", display: "inline-block", color: "#fff", fontWeight: "Bold" }}>
                {fahrenheit.fahrenheit}
              </Typography>
            )}

            <ToggleButtonGroup exclusive aria-label="text alignment" color="success">
              <ToggleButton value="left" aria-label="left aligned" onClick={convertTocelsius} sx={ButtonStyle}>
                &deg;C
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered" sx={ButtonStyle} onClick={() => convertToFahrenheit(weatherDetails?.main?.temp)}>
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
