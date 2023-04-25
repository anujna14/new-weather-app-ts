import { Box } from "@mui/material";
import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { WeatherContextType } from "../../types/WeatherTypes";
import TableContainerBox from "../UI/TableContainerBox";

const Favourites = () => {
  const { favourites, removeAllFav } = useContext(WeatherContext) as WeatherContextType;
  return (
    <Box>
      <TableContainerBox value={favourites} handleRemoveAll={removeAllFav} removeString="Favourite"/>
    </Box>
  );
};

export default Favourites;
