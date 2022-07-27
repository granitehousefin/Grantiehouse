import React from "react";
import { useTranslation } from "react-i18next";

// MUI Components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Assets

// Styled Components
import { DefaultButton,OutlinedButton  } from "../Button";
import BuyTokenModal from "../BuyTokenModal";

const SectionA = (props) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      px={{ lg: 20, md: 10, sm: 5, xs: 1 }}
      py={{ lg: 2, md: 2, sm: 2, xs: 2 }}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/Background/Main.svg"
          })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100vw",
      }}
    >
      <BuyTokenModal open={props.open} setOpen={props.setOpen} />
      <Grid item md={6} sm={12}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography fontSize={19}>
            {t(
              "Granite can refer to anything compared to this rock in great hardness, firmness, or durability."
            )}
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography
            fontSize={50}
            fontWeight={900}
            lineHeight={1}
            pt={2}
            pb={5}
            color="rgb(223, 180, 23)"
          >
            {t("Safe & Solid Protocol")}
          </Typography>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Typography fontSize={20}>
            {t(
              "Granite House exists to provide unique, high quality, safe and easy-to-use products and services that provide utility within the cryptocurrency environment and beyond."
            )}
          </Typography>
        </AnimationOnScroll>
        <Box 
      display={`flex`}
      mt={6}
      >
        <a href="/documentation" style={{ textDecoration: "none" }}>
          <OutlinedButton />
        </a>
        <DefaultButton setOpen={props.setOpen} />
      </Box>
      </Grid>
      <Grid item md={6}></Grid>
    </Grid>
  );
};

export default SectionA;
