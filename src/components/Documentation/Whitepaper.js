import React, { useState } from "react";
// import pdf from "../Files/whtepaper.pdf";
import pdf from "../../Files/Whitepaper.pdf";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Whitepaper = (props) => {
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/WhitepaperInactive.svg"}
          alt="logo"
          width={70}
        />
 
        <Typography
            fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Whitepaper
        </Typography>
        
      </Box>
      
      <Box>
        <Typography
          fontSize={20}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          1. The DeFi Space
        </Typography>
        <Typography
          fontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
        >
          Cryptocurrencies are digital currencies designed to work as a medium
          of exchange through a computer network not reliant on a central
          authority. As tradable digital assets or money, they are built on
          blockchain technology that exists online. Moreover, cryptocurrencies
          use encryption to authenticate and protect transactions. There are
          thousands of different cryptocurrencies in the world.
        </Typography>
        <Typography
          fontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={1}
        >
          The idea of no central authority has been pushed further in
          decentralised finance (DeFi). DeFi offers financial instruments
          without relying on intermediaries such as brokerages, exchanges, or
          banks by using smart contracts on a blockchain. DeFi platforms allow
          people to lend or borrow funds from others, speculate on price
          movements on assets using derivatives, trade cryptocurrencies, insure
          against risks, and earn interest in savings-like accounts. DeFi uses a
          layered architecture and highly composable building blocks. Some
          applications promote high interest rates but are subject to high risk.
          As of April 2022, the value of assets used in decentralised finance
          amounted to $220 billion.
        </Typography>
        <Typography
          fontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={1}
        >
          For all the exciting innovation; unfortunately, the space is gaining a
          sour reputation perpetrated by bad actors and fickle projects that
          fail before they even get started. These problems threaten to stifle
          the huge potential that the sector holds.
        </Typography>
      </Box>
      <a href={pdf} target="blank" style={{textDecoration: "none"}}>
      <Box>
      <Box
        // display={`flex`}
        ml={4}
        pt={5}
        pb={1}
        px={5}

        alignItems={`center`}
        // borderBottom={`1px solid rgba(223, 180, 23, 0.3)`}
      >
        <img
          src={process.env.PUBLIC_URL + "assets/images/Whitepaper.png"}
          alt="whitepaper"
          width={250}
        />
        <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        
        pt={1}
        >
        Click to read the Granite House Whitepaper
        </Typography>
      </Box>
    </Box>
    </a>
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
          Previous - Granite Story
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
            Next - Tokenomics & Taxes
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
            
          </Typography>
        </Box>
      </Box>
      {/* <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
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
            Next - Tokenomics & Taxes
          </Typography>
          <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
            {`Tokenomics & Taxes`}
          </Typography>
        </Box>
      </Box> */}
      </div>
    </Box>
  );
};

export default Whitepaper;
