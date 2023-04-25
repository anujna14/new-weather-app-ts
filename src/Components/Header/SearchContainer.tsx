import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContext } from "../../Context/SearchContext";
import { SearchContextType } from "../../types/WeatherTypes";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchContext = useContext(SearchContext) as SearchContextType;


  const handleSearchSubmit = (e: React.FormEvent, searchString: string) => {
    e.preventDefault();
    searchContext.handleSearchedValue(searchString);
    setSearchValue("");
  };
  return (
    <>
      <Paper
        onSubmit={(e: React.FormEvent) => {
          handleSearchSubmit(e, searchValue);
        }}
        elevation={0}
        component="form"
        variant="outlined"
        sx={{
          p: "2px 4px",
          display: "flex",
          width: {
            xs: 200,
            sm: 300,
            md: 350,
            lg: 500,
          },
          margin: "0 auto",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#fff" }}
          placeholder="Search  city"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <IconButton type="button" sx={{ p: "10px", color: "#fff" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchContainer;
