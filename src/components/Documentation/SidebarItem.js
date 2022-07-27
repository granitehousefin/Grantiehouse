import React from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SidebarItem = (props) => {
  return (
    
    <Box
  
      display={`flex`}
      alignItems={`center`}
      gap={2}
      width={300}
      p={2}
      my={1}
      backgroundColor={props.active ? `rgb(223, 180, 23)` : `transparent`}
      sx={{
        "&:hover": {
          backgroundColor: props.active ? "" : "rgba(243, 200, 43, 0.3)",
          cursor: "pointer",
        },
      }}
      onClick={props.setTab}
    >
      <Box width={70} textAlign={`center`}>
        <img
          src={props.active ? props.activeIcon : props.inactiveIcon}
          alt="item icon"
          height={30}
        />
      </Box>
      <Typography
        fontSize={14}
        color={props.active ? `rgb(50, 50, 50)` : `rgb(223, 180, 23)`}
        textAlign={`center`}
      >
        {props.title}
      </Typography>
    </Box>
    
  );
};

export default SidebarItem;
