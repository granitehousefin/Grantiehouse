import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

// MUI Components
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SectionB = () => {
  return (
    <Box
      // mt={{ lg: 10, md: 8, sm: 5, xs: 1 }}
      px={{ lg: 20, md: 10, sm: 5, xs: 1 }}
      // py={{ lg: 15, md: 12, sm: 10, xs: 5 }}
    >
      <Box
        mb={10}
        display={`flex`}
        flexDirection={`column`}
        alignItems={`center`}
      >
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography
            fontSize={{ sm: 40, xs: 28 }}
            fontWeight={500}
            textAlign={`center`}
          >
            Ultimately, Granite House would grow to become the owner of the
            premier blockchain for the DeFi space:
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography
            fontSize={{ sm: 52, xs: 40 }}
            fontWeight={700}
            pb={5}
            textAlign={`center`}
          >
            Granite Blockchain.
          </Typography>
        </AnimationOnScroll>
        <Box width={{ md: `50%`, sm: `70%`, xs: `80%` }}>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/Granite-Blockchain.svg"
              }
              alt="Granite Blockchain"
              width={`100%`}
              style={{
                border: "5px solid rgb(223, 180, 23)",
                borderRadius: "5px",
                padding: "100px 20px",
              }}
            />
          </AnimationOnScroll>
        </Box>
      </Box>
      <Box
        textAlign={`center`}
        border={`7px solid rgb(223, 180, 23)`}
        borderRadius={1}
        padding={{ lg: 10, md: 8, sm: 5, xs: 1 }}
        mb={10}
      >
        <AnimationOnScroll animateIn="animate__bounceIn">
          <img
            src={process.env.PUBLIC_URL + "assets/images//Granite-Team.svg"}
            alt="Granite Team"
            width={`50%`}
            style={{ marginBottom: "30px" }}
          />
        </AnimationOnScroll>
        <Typography fontSize={23} fontWeight={200}>
          The team are working day and night building Granite
          House with boundless excitement, unstinting dedication and
          tireless
           commitment
        </Typography>
      </Box>
      <Box
        textAlign={`center`}
        border={`7px solid rgb(223, 180, 23)`}
        borderRadius={1}
        padding={{ lg: 10, md: 8, sm: 5, xs: 1 }}
        mb={10}
      >
        <AnimationOnScroll animateIn="animate__bounceIn">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <img
              src={
                process.env.PUBLIC_URL + "assets/images/Granite-Security.svg"
              }
              alt="Granite Security"
              width={`50%`}
              style={{ marginBottom: "30px" }}
            />
          </AnimationOnScroll>
          <Typography fontSize={23} fontWeight={200}>
            Granite House would achieve its goals by
            
            following and maintaining the Granite House 
            values of Trust & Security, Professionalism,
             Value, Great Community and Successful
           
            Marketing.
          </Typography>
        </AnimationOnScroll>
      </Box>
      <Box
        textAlign={`center`}
        border={`7px solid rgb(223, 180, 23)`}
        borderRadius={1}
        padding={{ lg: 10, md: 8, sm: 5, xs: 1 }}
        mb={10}
      >
        <AnimationOnScroll animateIn="animate__bounceIn">
          <img
            src={process.env.PUBLIC_URL + "assets/images/Granite-Grow.svg"}
            alt="Granite Grow"
            width={`50%`}
            style={{ marginBottom: "30px" }}
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography fontSize={23} fontWeight={200}>
            Granite House is on a mission to grow and exceed a billion
             dollar valuation, and make
             early investors who seize the opportunity millionaires, and
            
            still receive decent profit just by
           holding Granite tokens ($GRNT).
             Moreover, Granite House's products and services would
             contribute to the DeFi space by setting a standard of
            stability, security and solidity for other
        
            protocols to emulate.
          </Typography>
        </AnimationOnScroll>
      </Box>
    </Box>
  );
};

export default SectionB;
