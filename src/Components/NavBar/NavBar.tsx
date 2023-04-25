import { AppBar, CssBaseline, Toolbar, Typography, styled, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTodayDate } from "../../utilities/CurrentDate";

const AppContainer = styled(AppBar)({
  width: "90%",
  position: "sticky",
  background: "transparent",
  color: "#fff",
  margin: "0 auto",
});

const NavBar = () => {
  const [currentValue, setCurrentValue] = useState({
    day: "",
    date: 0,
    month: "",
    year: 0,
    time: "",
  });
  useEffect(() => {
    const timer = setInterval(() => {
      getTheCurrentValues();
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getTheCurrentValues = () => {
    const response = getTodayDate();
    setCurrentValue({
      day: response.currentDay,
      date: response.currentDate,
      month: response.currentMonth,
      year: response.currentYear,
      time: response.currentTime,
    });
  };

  return (
    <AppContainer elevation={0} position="static">
      <CssBaseline />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FED738" : "#fff",
              padding: "10px 12px 22px 12px",
              textDecoration: "none",
              letterSpacing: "1.5px",
              marginRight: "4px",
              fontSize: "20px",
              borderBottom: isActive ? "2px solid #FED738" : "none",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FED738" : "#fff",
              padding: "10px 12px 22px 12px",
              textDecoration: "none",
              fontSize: "20px",
              letterSpacing: "1.5px",
              marginRight: "4px",
              borderBottom: isActive ? "2px solid #FED738" : "none",
            })}
            to="/favourite"
          >
            Favourites
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FED738" : "#fff",
              padding: "10px 12px 22px 12px",
              textDecoration: "none",
              letterSpacing: "1.5px",
              marginRight: "4px",
              fontSize: "20px",
              borderBottom: isActive ? "2px solid #FED738" : "none",
            })}
            to="/recentsearch"
          >
            Recent Search
          </NavLink>
        </div>
        <div>
          <Typography component="span">{currentValue.day}, </Typography>
          <Typography component="span">{currentValue.date} </Typography>
          <Typography component="span">{currentValue.month} </Typography>
          <Typography component="span" sx={{ paddingRight: "10px" }}>
            {currentValue.year}{" "}
          </Typography>
          <Typography component="span">{currentValue.time}</Typography>
        </div>
      </Toolbar>
      <Divider color="#ccc" />
    </AppContainer>
  );
};

export default NavBar;
