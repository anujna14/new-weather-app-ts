import { Box, Typography } from "@mui/material";
import React from "react";
import NofavFoundImag from "../../assets/icon_nothing.png";

const NoFavouritesFound = () => {
  return (
    <Box sx={{ paddingTop: "180px", display: "flex", justifyContent: "center", alignItems: "center" , flexDirection: "column"}}>
      <img style={{width: "200px", marginBottom: "12px"}} src={NofavFoundImag} alt="Not found" />
      <Typography variant="h5" sx = {{fontWeight: "Bold"}} gutterBottom>No Favourites Found!</Typography>
    </Box>
  );
};

export default NoFavouritesFound;
