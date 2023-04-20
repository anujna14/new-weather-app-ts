import { AppBar, CssBaseline, Toolbar, Typography, styled, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { getTodayDate } from "../../utilities/CurrentDate";

const AppContainer = styled(AppBar)({
  width: "90%",
  position: "sticky",
  background: "transparent",
  color: "#fff",
  margin: "0 auto",
});

const NavBar = () => {
  return (
    <AppContainer elevation={0} position="static">
      <CssBaseline />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Link style={{ padding: "0px 12px", color: "#fff", textDecoration: "none", fontSize: "20px" }} to="/">
            Home
          </Link>
          <Link style={{ padding: "0px 12px", color: "#fff", textDecoration: "none", fontSize: "20px" }} to="/favourite">
            Fovourites
          </Link>
          <Link style={{ padding: "0px 12px", color: "#fff", textDecoration: "none", fontSize: "20px" }} to="/recentsearch">
            Recent Search
          </Link>
        </div>
        <div>
          <Typography component="span">{getTodayDate().currentDay}, </Typography>
          <Typography component="span">{getTodayDate().currentDate} </Typography>
          <Typography component="span">{getTodayDate().currentMonth} </Typography>
          <Typography component="span" sx={{ paddingRight: "10px" }}>
            {getTodayDate().currentYear}{" "}
          </Typography>
          <Typography component="span">{getTodayDate().currentTime}</Typography>
        </div>
      </Toolbar>
      <Divider color="#ccc" />
    </AppContainer>
  );
};

export default NavBar;
