import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
export default function FeatureCard(props) {
  return (
    <Box
      border={`5px solid rgb(223, 180, 23)`}
      textAlign={`center`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`space-around`}
      alignItems={`center`}
      width={{ lg: 350, md: 250, sm: 200, xs: 150 }}
      height={{ lg: 350, md: 250, sm: 200, xs: 150 }}
    >
      <img
        src={props.image}
        width="40%"
        alt="icon"
        style={{ padding: "10px 0" }}
      />
      <Typography
        color={`rgb(223, 180, 23)`}
        fontSize={{
          xl: `32px`,
          lg: `24px`,
          md: `18px`,
          sm: `14px`,
          xs: `12px`,
        }}
        py={1}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
