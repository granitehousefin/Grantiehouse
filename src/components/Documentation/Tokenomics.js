import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Total Supply", "1,000,000,000", "100%"),
  createData("Inital Liquidity On DEX", "30,000,000", "3%"),
  createData("Sod-Cutting Ceremony ", "100,000,000", "10%"),
  createData("Marketing & Development", "100,000,000", "10%"),
  createData("Intial Team Tokens", "60,000,000", "6%"),
  createData("Bonus Team Tokens", "60,000,000", "10%"),
  createData("Locked Tokens", "650,000,000", "65%"),
];

const Tokenomics = (props) => {
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/TokenomicsInactive.svg"}
          alt="logo"
          width={100}
        />
        <Typography
          fontSize={{ lg: 48, md: 48, sm: 48, xs: 18 }}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          {`Tokenomics & Taxes`}
        </Typography>
      </Box>
      <Box>

        <Box
          ml={4}
        >
          <h2>Tokenomics</h2>
          <Typography>
            Our goal is to ultimately grow our platform to a value of at least a billion dollars. For
            that we would be issuing a total of one billion tokens with a constant reminder to work
            hard to drive the price to at least $1.
          </Typography>
          <TableContainer
            mt={10}
            component={Paper}
            style={{ background: "transparent", overflow: "auto" }}
          >
            <Table
              sx={{ minWidth: 450 }}
              aria-label="simple table"
              style={{ overflow: "scroll", borderBottom: "#ffc107 !important" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Number Of Tokens</TableCell>
                  <TableCell align="center">Percentage (%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                style={{ borderBottom: "1px solid #ffc107 !important" }}
              >
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography>
          <ul>
            <li><b>Private Sale - </b>  1,000,000 $GRNT or effectively $1,000 = 200,000
              $GRNT [each $GRNT token is worth $0.005]</li>



            <li><b>Private Sale - </b> $1000 = 100,000 $GRNT [each $GRNT token is worth $0.01]</li>
          </ul>
        </Typography>
        <Typography
          ml={4}
        >
          <h2>Taxes</h2>
          <p>
            The protocol would apply a 15% buy tax. Literally 5% of the original transaction amount
            (or more accurately 33.33% [5/15 or 1/3] of that 15% tax) would go to liquidity; 5%
            would go to buyback and burn; 3% would go to marketing and development; and 2%
            would go to reflections for holders.
            There would also be a 20% sell tax. Literally 8% (or more accurately 40% [8/20 or 2/5]
            of that 20% tax) would go to liquidity; 5% would go to buyback and burn; 5% would go
            to marketing and development; and 2% would go to reflections for holders.
            A combination of the buyback and burn strategy would reduce circulating supply
            making Granite token deflationary in nature and thereby driving price upwards.
          </p>
        </Typography>

      </Box>

      <div style={{ padding: "0 10px", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
          <Box
            backgroundColor={`rgb(223, 180, 23)`}
            p={1}
            width={{ lg: 200, md: 200, sm: 200, xs: 150 }}
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgba(223, 180, 23, 0.9)",
              },
            }}
            onClick={props.onPreviousClick}
          >
            <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
              Previous - Whitepaper
            </Typography>
            <Typography fontSize={16} color={`rgb(50, 50, 50)`}>

            </Typography>
          </Box>
        </Box>
        <Box display={`flex`} justifyContent={`flex-end`} pt={5}>
          <Box
            backgroundColor={`rgb(223, 180, 23)`}
            p={1}
            width={{ lg: 200, md: 200, sm: 200, xs: 150 }}
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgba(223, 180, 23, 0.9)",
              },
            }}
            onClick={props.onClick}
          >
            <Typography fontSize={12} color={`rgb(70, 70, 70)`}>
              Next -   Project Phases
            </Typography>
            <Typography fontSize={16} color={`rgb(50, 50, 50)`}>

            </Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Tokenomics;
