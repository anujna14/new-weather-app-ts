import { Box } from "@mui/material";
import React, { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { WeatherContextType } from "../../types/WeatherTypes";
import NoContentFound from "../UI/NoContentFound";
import TableContainerBox from "../UI/TableContainerBox";

const RecentSearchContainer = () => {
  const weatherDetails = JSON.parse(localStorage.getItem("items") || "");

  const { removeRecentSearch } = useContext(WeatherContext) as WeatherContextType;
  return (
    <Box>
      {weatherDetails.length === 0 ? (
        <NoContentFound message="No Recent Search"/>
      ) : (
        <TableContainerBox value={weatherDetails} handleRemoveAll={removeRecentSearch} removeString="Recent Search" />
      )}
    </Box>
  );
};

export default RecentSearchContainer;
