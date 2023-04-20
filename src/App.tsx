import React from "react";
import "./App.css";
import { Box, styled } from "@mui/material";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourite";
import RecentSearch from "./Pages/RecentSearch";

import Image from "./assets/background.png";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import WeatherProvider from "./Context/WeatherContext";
import SearchContextProvider from "./Context/SearchContext";

const AppContainer = styled(Box)({
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  color: "#fff",
  margin: "0 auto",
});

function App() {
  return (
    <AppContainer
      sx={{
        width: {
          lg: "70%",
        },
      }}
    >
      <SearchContextProvider>
        <WeatherProvider>
          <Header />
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/recentsearch" element={<RecentSearch />} />
          </Routes>
        </WeatherProvider>
      </SearchContextProvider>
    </AppContainer>
  );
}

export default App;
