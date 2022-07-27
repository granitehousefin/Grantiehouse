import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Story = (props) => {
  return (
    <Box
    // height={`250vh`} 
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/StoryInactive.svg"}
          alt="logo"
          width={100}
        />
        <Typography
          fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          Granite Story
        </Typography>
      </Box>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        It's May 2022 and the cryptocurrency field is fast becoming a quicksand.
        Prices are tumbling all over. Investors are waking up every day to a
        decrease in the value of their portfolios. The field looks like sinking
        sand, and there is a frantic search by investors for something safe and
        secure.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        A group of people crypto experts met at the break of dawn and cracked
        their brains to find a solution for the many tired and weary searchers
        who had been rug-pulled, scammed by fake projects or lost virtually all
        their funds. They brainstormed for hours, asking: "Why don't we go back
        to basics and innovate to create a much-loved, valuable, secure and top-
        rated crypto asset?" But they reasoned, "What's innovation in a space
        where everything seems to be sinking? And what are the loopholes to
        close or pitfalls to avoid?"
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        They deliberated further and concluded: "Why not seek to work on the
        foundation before innovation?" One member suggested they build a granite
        foundation as that's solid. After all, granite can refer to, "Anything
        compared to this rock in great hardness, firmness, or durability"
        (Dictionary.com). These crypto experts knew many investors were sinking
        and needed something safe and secure. With this in mind the idea for
        Granite House was born. The vision was clear: a beautiful Granite House
        built with a long-term focus to outlive many pump and dumps, or simply
        hype-based protocols. Yes, a solid platform built to last and better
        than a hundred rug-pulls or shabby projects that only lose investors'
        money. They were set on showcasing the potential of decentralised
        finance (DeFi) and changing the narrative that crypto is only full of
        scams.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        As every house needs resources to build, these crypto experts decided
        they would sell rights to 100 Granite Rooms (private sale or sod-cutting
        ceremony) and acquire high quality and durable materials to complete a
        successful project.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        Like a palatial house with different floors, they planned Granite House
        to be an expansive ecosystem having products like Granite Swap, Granite
        Bridge, Granite Farming, Granite Play, Granite Empire, Granite Wallet,
        Granite NFTs, Granite Activity, Granite Mountain, Granite Venture
        Capital, Granite Mansion, Granite Marketplace and Granite Charity.
        Ultimately, Granite House would grow to become the owner of the premier
        blockchain for the DeFi space: Granite Blockchain.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        With boundless excitement, unstinting dedication and tireless commitment
        the team worked day and night building their strong and beautiful
        Granite House. They took on the competition guided by the terms
        difference and excellence as they built and offered unique, high
        quality, safe and easy-to-use products and services that provide Utility
        within the cryptocurrency environment and beyond.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        This was all possible because they maintained the Granite House values
        of Trust & Security, Professionalism, Value, Great Community and
        Successful Marketing.
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={2}
      >
        When Granite House was finally built, it was a large and imposing
        edifice worth more than a billion dollars, and the early investors who
        seized the opportunity had all become millionaires, and still receiving
        decent profits just by holding Granite tokens ($GRNT). Moreover, Granite
        House's products and services had contributed to the DeFi space by
        setting a standard of stability, security and solidity for other
        protocols to emulate. The End.
      </Typography>
      {/*  */}
      <div style={{ padding:"0 10px",display: "flex", justifyContent: "space-between" , flexWrap:"wrap",marginBottom:"20px"}}>

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
              Previous - Project Summary
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
              Next - Whitepaper
            </Typography>
            <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
              
            </Typography>
          </Box>
        </Box>
      </div>
    </Box>

  );
};

export default Story;
