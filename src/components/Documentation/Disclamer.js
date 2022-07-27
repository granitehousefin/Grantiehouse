import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Disclamer = (props) => {
  return (
    <Box 
    // height={`500vh`}
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/DisclamerInactive.svg"}
          alt="logo"
          width={70}
        />
        <Typography
        fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Disclaimer
        </Typography>
      </Box>

      <Box>
        <Typography 
        mt={2}
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        >
          Granite House is a decentralized finance platform operating within the cryptocurrency
          environment and beyond. $GRNT is a digital asset with no associated rights at this
          time other than being the native token of the Granite House ecosystem. The Granite
          House team will determine configuration and features that may result in holders of
          $GRNT receiving a portion of revenue generated and/or reflections in the ecosystem’s
          native token or other benefits. The nature of any such benefit is not yet determined
          and will be set by the Granite House team from time to time. Any prior statements of
          potential benefits of holding $GRNT are suggestive only and yet to be determined by
          the Granite House team. A person acquiring $GRNT has no actual, contingent or
          prospective rights to any such benefits and accordingly should have no hope or
          expectation of any benefits being provided to them. If any benefits are provided at a
          later time, they are subject to change by the Granite House team. Any person
          considering acquiring $GRNT should consider seeking independent advice.
          The information here is subject to change or update and should not be construed as a
          commitment, promise or guarantee by Granite House or any other individual or
          organization mentioned here relating to the future availability of services related to the
          use of the tokens or to their future performance or value.

        </Typography>
      </Box>
      
      <Box display={`flex`} justifyContent={`flex-start`} pt={5} mb={20} ml={1}>
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
          onClick={props.onPreviousClick}
        >
          <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
            Previous : FAQ
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
        
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Disclamer;
