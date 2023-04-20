import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
    fontSize: "22px"

})

const WeatherDetails = () => {
  return (
    <WeatherContainerBox>
      <Box sx={{ display: "flex" }}>
        <ThermostatIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Min - Max</TypographyStyle>
          <Typography component="span">75&deg; - 90&deg;</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <AirIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Precipitation</TypographyStyle>
          <Typography>0%</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex", padding: "12px 26px" }}>
        <WaterDropIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Humidity</TypographyStyle>
          <Typography>47%</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <ThunderstormIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Wind</TypographyStyle>
          <Typography>4 mph</Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <VisibilityIcon sx={{ fontSize: "50px", paddingRight: "12px" }} />
        <Stack>
          <TypographyStyle>Visibility</TypographyStyle>
          <Typography>12mph</Typography>
        </Stack>
      </Box>
    </WeatherContainerBox>
  );
};

export default WeatherDetails;
