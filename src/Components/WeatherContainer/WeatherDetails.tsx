import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { WeatherContext } from "../../Context/WeatherContext";
import { WeatherContextType } from "../../types/WeatherTypes";

const WeatherContainerBox = styled(Box)({
  borderTop: "1px solid #ccc",
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "40px",
  margin: "10px 20px 0 20px",
});

const TypographyStyle = styled(Typography)({
  fontSize: "22px",
});

const WeatherDetails = () => {
  const { weatherDetails } = useContext(WeatherContext) as WeatherContextType;
  return (
    <WeatherContainerBox>
      <Box sx={{ display: "flex" }}>
        <ThermostatIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Min - Max</TypographyStyle>
          <Typography component="span">
            {weatherDetails?.main?.temp_min}&deg; - {weatherDetails?.main?.temp_max}&deg;
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <AirIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Feels Like</TypographyStyle>
          <Typography>{weatherDetails?.main?.feels_like}</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex", padding: "12px 26px" }}>
        <WaterDropIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Humidity</TypographyStyle>
          <Typography>{weatherDetails?.main?.humidity} %</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <ThunderstormIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Wind</TypographyStyle>
          <Typography>{weatherDetails?.wind?.speed} mph</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <VisibilityIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Visibility</TypographyStyle>
          <Typography>{weatherDetails?.visibility ? weatherDetails.visibility / 1000 : 0} mph</Typography>
        </Stack>
      </Box>
    </WeatherContainerBox>
  );
};

export default WeatherDetails;
