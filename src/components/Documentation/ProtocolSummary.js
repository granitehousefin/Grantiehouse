import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProtocolSummary = (props) => {
  return (
    <Box 
    height={`100vh`}
    >
      <Box
     
        display={`flex`}
        ml={4}
        pt={5}
        pb={1}
        alignItems={`flex-end`}
        borderBottom={`1px solid rgba(223, 180, 23, 0.3)`}
        
      >
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo.svg"}
          alt="logo"
          width={125}
        />
        <Typography
          fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Project Summary
        </Typography>
      </Box>
      <Box textAlign={`center`} py={1}>
        {/* <img
          src={process.env.PUBLIC_URL + "assets/images/logo.svg"}
          alt="logo"
          width={`50%`}
        /> */}
      </Box>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
      >
        Granite House exists to provide unique, high quality, safe and
        easy-to-use products and services that provide utility within the
        cryptocurrency environment and beyond. We are laying a firm foundation
        to build a billion dollar project to make great gains for our early
        investors who seize the opportunity. Granite House's products and
        services would contribute to the DeFi space by setting a standard of
        stability, security and solidity for other protocols to emulate.
      </Typography>
      <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
        <Box
          backgroundColor={`rgb(223, 180, 23)`}
          p={1}
          width={200}
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(223, 180, 23, 0.9)",
            },
          }}
          onClick={props.onClick}
        >
          <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
            Next -  Granite Story
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
          
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProtocolSummary;
