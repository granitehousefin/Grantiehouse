import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

// MUI Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FeatureCard from "../FeatureCard";

const SectionB = () => {
  return (
    <Box
      // mt={{ lg: 10, md: 8, sm: 5, xs: 1 }}
      px={{ lg: 20, md: 10, sm: 5, xs: 1 }}
      py={{ lg: -5, md: -5, sm: -5, xs: -5}}
    >
      <Box
        m={5}
        p={2}
        textAlign={`center`}
        border={`7px solid rgb(223, 180, 23)`}
        borderRadius={2}
      >
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography fontSize={30} fontWeight={700}>
            GRANITE FLOORS
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography fontSize={14} color={`rgb(223, 180, 23)`}>
            Like a palatial house with different floors, Granite House would be
            an expansive ecosystem having products
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/images/icon-feature/Granite-Features.svg"
            }
            alt="GraniteFeatures"
            width={`50%`}
          />
        </AnimationOnScroll>
      </Box>
      <Grid container columnSpacing={{ lg: 20, md: 5 }}>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Swap.svg"
              }
              title={`GRANITE SWAP`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Bridge.svg"
              }
              title={`GRANITE BRIDGE`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Farming.svg"
              }
              title={`GRANITE FARMING`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Play.svg"
              }
              title={`GRANITE PLAY`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Empire.svg"
              }
              title={`GRANITE EMPIRE`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Wallet.svg"
              }
              title={`GRANITE WALLET`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-NFT.svg"
              }
              title={`GRANITE NFT`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Activity.svg"
              }
              title={`GRANITE ACTIVITY`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/granite1.svg"
              }
              title={`GRANITE BLOCKS`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Venture.svg"
              }
              title={`GRANITE VENTURE CAPITAL`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Mansion.svg"
              }
              title={`GRANITE MANSION`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Marketplace.svg"
              }
              title={`GRANITE MARKETPLACE`}
            />
          </AnimationOnScroll>
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={6}
          p={1}
          display={`flex`}
          justifyContent={`center`}
        >
          <AnimationOnScroll animateIn="animate__bounceIn">
            <FeatureCard
              image={
                process.env.PUBLIC_URL +
                "assets/images/icon-feature/Granite-Charity.svg"
              }
              title={`GRANITE CHARITY`}
            />
          </AnimationOnScroll>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionB;
