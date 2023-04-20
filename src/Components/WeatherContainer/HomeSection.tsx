import { Box, Card, CardMedia, IconButton, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SearchContext } from "../../Context/SearchContext";
import { SearchContextType } from "../../types/WeatherTypes";

const HomeSection = () => {
  let weatherUrl = `https://openweathermap.org/img/wn/10d@2x.png`;
  const { searchedValue } = React.useContext(SearchContext) as SearchContextType;


  console.log("SERACHED VALUE",searchedValue)
  return (
    <>
      <Box sx={{ padding: "20px", margin: "20px" }}>
        <Typography sx={{ fontWeight: "Bold", paddingLeft: "8px", fontSize: "22px" }}>Udupi karnataka</Typography>
        <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography component="span">Add to Favourite</Typography>
        </Box>
      </Box>
      <Box>
        <Card elevation={0} sx={{ background: "transparent" }}>
          <CardMedia sx={{ height: 100, width: 150, left: 0, margin: "0 auto" }} image={weatherUrl} title="url" />
          <Box sx={{ textAlign: "center" }}>
            <Typography component="span" sx={{ fontSize: "60px", display: "inline-block", color: "#fff", fontWeight: "Bold" }}>
              87
            </Typography>
            <ToggleButtonGroup exclusive aria-label="text alignment" color="success">
              <ToggleButton value="left" aria-label="left aligned" sx={{ color: "#ccc", borderRadius: "0px" }}>
                &deg;C
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered" sx={{ color: "#ccc", borderRadius: "0px" }}>
                &deg;F
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{ color: "#fff", padding: "20px" }} variant="h5">
              Mostly Sunny
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default HomeSection;
