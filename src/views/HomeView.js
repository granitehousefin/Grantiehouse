import React from "react";
// Components
import SectionA from "../components/HomeView/SectionA";
import SectionB from "../components/HomeView/SectionB";
import SectionD from "../components/HomeView/SectionD";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
const HomeView = (props) => {
  return (
    <Box backgroundColor={`#000`} color={`#fff`}>
      <SectionA open={props.open} setOpen={props.setOpen} />
      <SectionB />
      {/* <SectionC /> */}
      <SectionD />
      <Footer />
    </Box>
  );
};

export default HomeView;
