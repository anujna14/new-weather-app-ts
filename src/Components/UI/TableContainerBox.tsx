import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WeatherContext } from "../../Context/WeatherContext";
import { ForecastType, WeatherContextType } from "../../types/WeatherTypes";
import Modal from "../UI/Modal";

type PropType = {
  value: Array<ForecastType | null>;
  handleRemoveAll: () => void;
  removeString: string;
};
const TableContainerBox = ({ value, handleRemoveAll, removeString }: PropType) => {
  const [openModal, setOpenModel] = useState<boolean>(false);
  const { removeFavourite, addWeatherDetails } = useContext(WeatherContext) as WeatherContextType;

  const handleRemoveFav = (weatherDetails: ForecastType, id: number) => {
    addWeatherDetails({ ...weatherDetails, isFavourite: false });
    removeFavourite(id);
  };

  const handleRemove = () => {
    setOpenModel(true);
  };

  const handleClose = () => {
    setOpenModel(false);
  };

  const ids = value.map((val: any) => val.id);
  const filtered = value.filter((val: any, index: number) => !ids.includes(val.id, index + 1));
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "80px", marginTop: "10px" }}>
        <Typography variant="subtitle1">
          {filtered.length} City added as {removeString}
        </Typography>
        <Button onClick={handleRemove} variant="text" sx={{ color: "#fff", paddingRight: "80px" }}>
          Remove All
        </Button>
        {openModal && (
          <Modal openVal={openModal} setOpenModel={setOpenModel} handleClose={handleClose} removeAllFav={handleRemoveAll} message={removeString} />
        )}
      </Box>
      <TableContainer component={Paper} elevation={0} sx={{ padding: "60px", background: "transparent", maxHeight: "400px", overflowY: "scroll" }}>
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
            {filtered.reverse().map((fav) => (
              <TableRow key={fav?.id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, color: "#fff" }}>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell style={{ maxWidth: 100 }} align="left" sx={{ color: "#fff", fontWeight: "Bold", fontSize: "20px" }}>
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
                      <FavoriteIcon onClick={() => handleRemoveFav(fav, fav?.id!)} sx={{ color: "#F6BA6F" }} />
                    </IconButton>
                  ) : (
                    <IconButton>
                      <FavoriteBorderIcon sx={{ color: "#F6BA6F" }} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContainerBox;
