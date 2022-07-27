import React from "react";

// Material UI Components
import Box from "@mui/material/Box";

// Styled Components
import { DefaultButton, OutlinedButton } from "./Button";

export default function Header() {
  return (
    <Box
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
      backgroundColor={`#000`}
      px={{ lg: 10, md: 5, sm: 2, xs: 1 }}
      borderBottom={`1px solid #222`}
    >
      <Box py={1}>
        <a href="/">
          <Box width={{ lg: 150, md: 120, sm: 100, xs: 80 }}>
          <img
          src={process.env.PUBLIC_URL + "assets/images/logo.svg"}
          alt="logo"
          width={150}
        />
          </Box>
        </a>
      </Box>
      <Box>
        <a href="/documentation" style={{ textDecoration: "none" }}>
          <OutlinedButton />
        </a>
        <DefaultButton />
      </Box>
    </Box>
  );
}
