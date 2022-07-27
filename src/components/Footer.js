import React from "react";

// Material UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DefaultButton} from "./Button";

export default function Footer() {
  return (
    <Box
      display={`flex`}
      flexDirection={{lg:`row`, md:`row`,sm:`row`, xs:`column`}}
      justifyContent={`space-between`}
      alignItems={`center`}
      backgroundColor={`rgba(223, 180, 23, 0.5)`}
      px={{ lg: 10, md: 5, sm: 2, xs: 4 }}
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
      <Box 
      sx={{
        padding:'5px',
        textAlign:'center',
        cursor:'pointert',
        width:"124px",
        background:
          "linear-gradient(to top, rgb(223, 180, 23), rgb(103, 70, 23))",
        color: "#ddd",
        borderRadius: "20px",
        textTransform: "none",
        fontSize: {
          lg: 15,
          md: 16,
          sm: 14,
          xs: 10,
        },
        fontWeight: 700,
        "&:hover": {
          background:
            "linear-gradient(to top, rgb(233, 180, 43), rgb(113, 70, 43))",
          color: "#fff",
        },
      }}
      >
        <a href="http://admin.granitehouse.finance/auth" target={`blank`} style={{textDecoration:'none',color:'white'}}>
     Admin Login
      </a>
      </Box>
    </Box>
  );
}
