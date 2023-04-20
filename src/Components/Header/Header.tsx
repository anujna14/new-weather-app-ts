import React from "react";
import { Box, styled } from "@mui/material";
import iconImage from "../../assets/logo_web.png";
import SearchContainer from "./SearchContainer";
const HeaderContainer = styled(Box)({
  display: "flex",
  padding: "60px 120px",
  justifyContent: "space-between",
  alignItems: "center",
});

const Header = () => {
  return (
    <HeaderContainer>
      <Box>
        <img
          src={iconImage}
          alt="icon"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <SearchContainer />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
