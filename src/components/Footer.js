import React from "react";

// Material UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
      backgroundColor={`rgba(223, 180, 23, 0.5)`}
      px={{ lg: 10, md: 5, sm: 2, xs: 1 }}
      borderBottom={`1px solid #222`}
    >
      <Box py={1}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo.svg"}
          alt="logo"
          width={150}
        />
      </Box>
      <Box>
        <Typography
          fontSize={{ sm: 16, xs: 12 }}
          letterSpacing={{ lg: 30, md: 20, sm: 10, xs: 3 }}
          color={`rgb(223, 180, 23)`}
        >
          &copy; 2022 GRANITE HOUSE
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}
