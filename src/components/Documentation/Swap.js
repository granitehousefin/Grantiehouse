import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Swap = (props) => {
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/SwapInactive.svg"}
          alt="logo"
          width={70}
        />
        <Typography
          fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Granite Swap
        </Typography>
      </Box>

      <Box 
      textAlign={`center`}
      mt={20}
      >
      <img
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/SwapInactive.svg"}
          alt="logo"
          width={70}
        />
        <Typography
          fontSize={48}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Coming Soon
        </Typography>
      </Box>
      <div style={{ padding:"0 10px",display: "flex", justifyContent: "space-between",marginBottom:"20px"}}>
      <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
        <Box
          backgroundColor={`rgb(223, 180, 23)`}
          p={1}
          width={{lg:200, md:200, sm:200, xs:150}}
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(223, 180, 23, 0.9)",
            },
          }}
          onClick={props.onPreviousClick}
        >
          <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
          Previous - Project Phases
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
          
          </Typography>
        </Box>
      </Box>

      <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
        <Box
          backgroundColor={`rgb(223, 180, 23)`}
          p={1}
          width={{lg:200, md:200, sm:200, xs:150}}
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(223, 180, 23, 0.9)",
            },
          }}
          onClick={props.onClick}
        >
          <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
            Next - Website
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
            
          </Typography>
        </Box>
      </Box></div>
    </Box>
  );
};

export default Swap;
