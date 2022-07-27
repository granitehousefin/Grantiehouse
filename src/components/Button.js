import React from "react";

// Material UI Components
import Button from "@mui/material/Button";

export function DefaultButton(props) {
  return (
    <Button
      variant={`contained`}
      onClick={props.setOpen}
      sx={{
        background:
          "linear-gradient(to top, rgb(223, 180, 23), rgb(103, 70, 23))",
        color: "#ddd",
        borderRadius: "20px",
        textTransform: "none",
        fontSize: {
          lg: 20,
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
      Buy Granite Room
    </Button>
  );
}

export function OutlinedButton() {
  return (
    <Button
      variant={`outlined`}
      sx={{
        color: "#ddd",
        borderRadius: "20px",
        textTransform: "none",
        fontSize: {
          lg: 20,
          md: 16,
          sm: 14,
          xs: 12,
        },
        fontWeight: 700,
        border: "1px solid rgb(233, 180, 43)",
        marginRight: "10px",
        "&:hover": {
          background:
            "linear-gradient(to top, rgba(233, 180, 43, 0.4), rgba(113, 70, 43, 0.5))",
          color: "#fff",
          border: "1px solid rgb(233, 180, 43)",
        },
      }}
    >
      Documentation
    </Button>
  );
}
