import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {FaTiktok,FaGreaterThan,FaLessThan} from 'react-icons/fa';
import {FaMediumM} from 'react-icons/fa';
import { FaDiscord } from "react-icons/fa";

const SocialMedia = (props) => {
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/SocialMediaInactive.svg"}
          alt="logo"
          width={70}
        />
        <Typography
fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Social Media
        </Typography>
      </Box>
      <Box 
      display={'flex'}
      flexDirection={{lg:`row`, md:`row`,sm:`row`, xs:`column`}}
      alignItems="center"
      >
      <Box>
      <a href="https://t.me/GraniteHouseProject" style={{textDecoration: "none"}}>
     <Box 
     color={`orange`}
     ml={4}
     pt={5}
     pb={1}
     >
     <TelegramIcon style={{fontSize: "56px"}} />
     
      <Typography 
      color={`white`}
      textDecoration={`none`}
      // ml={1}
      pb={1}
      >
        Telegram
      </Typography>
     </Box>
     </a>

     <a href="https://twitter.com/GraniteHouseFin" style={{textDecoration: "none"}}>
     <Box 
     color={`orange`}
     ml={4}
     pt={5}
     pb={1}
     > 
     < TwitterIcon  style={{fontSize: "50px"}}/>
     </Box>
     <Typography 
     color={`white`}
     ml={4}
     pb={1}
     >
      Twitter
     </Typography>
     </a>

     <a href=" https://discord.gg/MBs77wVF8W" style={{textDecoration: "none"}}>
        <Box 
        color={`orange`}
        ml={4}
        pt={5}
        pb={1}
        >
       <FaDiscord  style={{fontSize: "50px"}}/>
        </Box>
       < Typography 
       color={`white`}
       ml={4}
       pb={1}
       outline={`none`}
       >
       Discord
       </Typography>
      </a>
    
      </Box>
      <Box>
    
    
      <a href="https://medium.com/@granitehouse" style={{textDecoration: "none"}}>
        <Box  
        color={`orange`}
        ml={4}
        pt={5}
        pb={1}
        >
     < FaMediumM  style={{fontSize: "50px"}}/>
     </Box>
     <Typography  
     color={`white`}
     ml={4}
     pb={1}
     >
      Medium
     </Typography>
      </a>

     <a href="https://www.facebook.com/Granite-House-101242269287036" style={{textDecoration: "none"}}>
      <Box 
      color={`orange`}
      ml={4}
      pt={5}
      pb={1}
      >
      <FacebookIcon  style={{fontSize: "50px"}}/>
      </Box>
      <Typography 
     color={`white`}
     ml={4}
     pb={1}
     >
      Facebook
     </Typography>
     </a>

     <a href="https://www.pinterest.com/granitehousefinance/" style={{textDecoration: "none"}}>
      <Box 
      color={`orange`}
      ml={4}
      pt={5}
      pb={1}
      >
      <PinterestIcon  style={{fontSize: "50px"}}/>
      </Box>
      <Typography 
     color={`white`}
     ml={4}
     pb={1}
     >
      Pinterest
     </Typography>
     </a>
     </Box>
     <Box>
     <a href="https://www.instagram.com/granitehousefinance/?hl=en" style={{textDecoration: "none"}}>
      <Box
     
     color={`orange`}
   
      ml={4}
      pt={5}
      pb={1}
      >
        <InstagramIcon style={{fontSize: "50px"}}/>
      </Box>
      <Typography 
      textDecoration={`none`}
      color={`white`}
      ml={4}
      
      pb={1}
      >
        Instagram
      </Typography >
      </a>
      <a href="https://www.reddit.com/user/GraniteHouseFinance" style={{textDecoration: "none"}}>
        <Box 
        
     color={`orange`}
   
     ml={4}
     pt={5}
     pb={1}
        >
     <RedditIcon   style={{fontSize: "50px"}}/>
     </Box>
     <Typography 
      color={`white`}
      ml={4}
      pb={1}
      >
        Reddit
      </Typography>

     </a>
    
     <a href="https://www.youtube.com/channel/UCpWN1e4OJ4Mq9wVct_kukYw" style={{textDecoration: "none"}}>
      <Box 
      color={`orange`}
      ml={4}
      pt={5}
      pb={1}
      >
      <YouTubeIcon style={{fontSize: "50px"}}/>
      </Box>
      <Typography 
     color={`white`}
     ml={4}
     pb={1}
     >
      YouTube
     </Typography>
     </a>

     </Box>
     <Box>
     

     
      <a href="https://stocktwits.com/GraniteHouse" style={{textDecoration: "none"}}>
        <Box  
        color={`orange`}
        ml={4}
        pt={5}
        pb={1}
        >
        <span style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
        <FaLessThan  style={{fontSize: "32px"}}/>
        <FaGreaterThan  style={{fontSize: "34px"}}/>
        </span>
        <Typography 
        color={`white`}
        // ml={4}
        pb={1}
        >
          StockTwits
        </Typography>
        </Box>
      </a>
      <a href="https://www.linkedin.com/company/granite-house-finance" style={{textDecoration: "none"}}>
      <Box 
      color={`orange`}
      ml={4}
      pt={5}
      pb={1}
      >
      <LinkedInIcon style={{fontSize: "50px"}}/>
      </Box>
      <Typography 
     color={`white`}
     ml={4}
     pb={1}
     >
      LinkedIn
     </Typography>
     </a>
     <a href="https://www.tiktok.com/@granitehousefinance?lang=en" style={{textDecoration: "none"}}>
        <Box  
        color={`orange`}
        ml={4}
        pt={5}
        pb={1}
        >
        <FaTiktok  style={{fontSize: "50px"}}/>
        <Typography 
        color={`white`}
        // ml={4}
        pb={1}
        >
          TikTok
        </Typography>
        </Box>
      </a>
     
     </Box>
     </Box>

     <div style={{ padding:"0 10px",display: "flex", justifyContent: "space-between" ,marginBottom:"20px"}}>

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
      Previous - Website
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
      Next - FAQ
    </Typography>
    <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
      
    </Typography>
  </Box>
</Box>
</div>
    </Box>

    
  );
};

export default SocialMedia;
