import { Box } from "@mui/material";
import HomeSection from "../Components/WeatherContainer/HomeSection";
import WeatherDetails from "../Components/WeatherContainer/WeatherDetails";

const Home = () => {
  return (
    <Box sx={{ margin: "40px" }}>
      <HomeSection />
      <WeatherDetails />
    </Box>
  );
};

export default Home;
