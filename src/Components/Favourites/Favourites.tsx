import { Box, Paper, Table, styled, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { ForecastType, WeatherContextType } from "../../types/WeatherTypes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favourites = () => {
  const { favourites, removeFavourite, removeAllFav } = useContext(WeatherContext) as WeatherContextType;

  const handleRemoveFav = (id: number) => {
    removeFavourite(id);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "80px", marginTop: "10px" }}>
        <Typography variant="subtitle1">{favourites.length} City added as favourite</Typography>
        <Button onClick={() => removeAllFav()} variant="text" sx={{ color: "#fff", paddingRight: "80px" }}>
          Remove All
        </Button>
      </Box>
      <TableContainer component={Paper} elevation={0} sx={{ padding: "60px", background: "transparent" }}>
        <Table
          sx={{
            minWidth: {
              lg: "400px",
            },
            margin: "0 auto",
            backgroundColor: "rgba(0,0,0,.1)",
          }}
          aria-label="simple table"
        >
          <TableBody>
            {favourites.map((fav) => (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, color: "#fff" }}>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell style={{ width: 400 }} align="left" sx={{ color: "#fff", fontWeight: "Bold", fontSize: "20px" }}>
                  {fav?.name}
                </TableCell>
                <TableCell align="right" sx={{ color: "#fff", fontWeight: "Bold", padding: 0 }}>
                  <img src={`https://openweathermap.org/img/wn/${fav?.weather[0]?.icon}@2x.png`} alt="icon" style={{ width: "80px" }} />
                </TableCell>
                <TableCell align="left" sx={{ color: "#fff", fontSize: "29px" }}>
                  {fav?.main?.temp} &deg;C
                </TableCell>
                <TableCell align="left" sx={{ color: "#fff", fontSize: "20px", textTransform: "capitalize" }}>
                  {fav?.weather[0]?.description}
                </TableCell>
                <TableCell align="left" sx={{ color: "#fff" }}>
                  {fav?.isFavourite ? (
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                  ) : (
                    <IconButton>
                      <FavoriteIcon onClick={() => handleRemoveFav(fav?.id!)} sx={{ color: "#F6BA6F" }} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Favourites;
