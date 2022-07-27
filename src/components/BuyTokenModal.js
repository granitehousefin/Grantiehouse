import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAuth from "../hooks/useAuth";
import { connectors } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
import { onlyNumbers } from "../utils/service";
import Web3 from "web3";
import {
  BUSDToken,
  ICOContractaddress,
  UADToken,
} from "../config/contract/contract";
import { BUSD } from "../config/ABI/BUSD";
import { ICOAbi } from "../config/ABI/ICOAbi";
import Swal from "sweetalert2";
import { Token } from "../config/ABI/Token";
const style = {
  position: "absolute",
  zIndex: 100,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "100%",
  bgcolor: "#000",
  border: "7px solid rgb(223, 180, 23)",
  boxShadow: 24,
  p: 4,
};
function BuyTokenModal(props) {
  const { login } = useAuth();
  const [isApproveDone, setIsApproveDone] = useState(false);
  const [isTranscation, setIsTranscation] = useState(false);
  const [isValue, setIsValue] = useState(0);
  const { chainId, account, library, active, deactivate } = useWeb3React();
  const ChainID = 3;
  const handleApprove = async () => {
    console.log(chainId, account);
    if (chainId !== ChainID && account === undefined) {
      Swal.fire("Warning", "Please connect to the wallect", "warning");
    } else {
      let web3 = new Web3(library.provider);
      let token = new web3.eth.Contract(BUSD, BUSDToken);
      let ICOtoken = new web3.eth.Contract(Token, UADToken);
      let ICO = new web3.eth.Contract(ICOAbi, ICOContractaddress);
      let data = await ICO.methods.getTokenomics().call();
      let NumberOfTokens = parseFloat(
        onlyNumbers(parseInt(isValue) * 5000) / (data[2] / Math.pow(10, 18))
      );
      let balanceToken = await ICOtoken.methods
        .balanceOf(ICOContractaddress)
        .call();
      let BUSDBalacne = await token.methods.balanceOf(account).call();
      console.log(
        NumberOfTokens,
        (parseFloat(balanceToken) - data[5]) / Math.pow(10, 5)
      );
      let isVerified = await ICO.methods.verifyUser(account).call();
      if (isVerified) {
        if (parseInt(isValue) * 5000 > 0) {
          if (new Date().getTime() / 1000 >= data[3]) {
            if (new Date().getTime() / 1000 < data[4]) {
              if (
                parseFloat(onlyNumbers(isValue * 5000)) <=
                BUSDBalacne / Math.pow(10, 18)
              ) {
                setIsTranscation(true);
                token.methods
                  .approve(
                    ICOContractaddress,
                    web3.utils.toWei(
                      onlyNumbers(parseInt(isValue) * 5000).toString(),
                      "ether"
                    )
                  )
                  .send({ from: account })
                  .then(() => {
                    setIsApproveDone(true);
                    setIsTranscation(false);
                    Swal.fire("Success", "Transcation successfull", "success");
                  })
                  .catch(() => {
                    setIsApproveDone(false);
                    setIsTranscation(false);
                    setIsValue(0);
                    Swal.fire("Warning", "Transcation Failed", "warning");
                  });
              } else {
                setIsTranscation(false);
                Swal.fire(
                  "Warning!",
                  "You dont have enough BUSD amount",
                  "warning"
                );
              }
            } else {
              setIsTranscation(false);
              Swal.fire("Warning!", "Sale has ended", "warning");
            }
          } else {
            setIsTranscation(false);
            Swal.fire("Warning!", "Sale is not started yet", "warning");
          }
        } else {
          if (isValue < 0) {
            setIsTranscation(false);
            Swal.fire("Warning", "Please enter correct amount", "warning");
          } else {
            setIsTranscation(false);
            Swal.fire("Warning", "Please enter amount ", "warning");
          }
        }
      } else {
        setIsTranscation(false);
        Swal.fire("Warning", "your are not whitelisted user", "warning");
      }
    }
  };
  const handleBuy = async () => {
    if (chainId !== ChainID && account === undefined) {
      alert("Please connect to the wallect");
    } else {
      console.log(library.provider);
      let web3 = new Web3(library.provider);
      let ICO = new web3.eth.Contract(ICOAbi, ICOContractaddress);
      console.log((isValue * Math.pow(10, 5)).toString());
      setIsTranscation(true);
      ICO.methods
        .SaleICOToken(
          web3.utils.toWei(onlyNumbers(isValue).toString(), "ether")
        )
        .send({ from: account })
        .then(() => {
          setIsApproveDone(false);
          setIsTranscation(false);
          setIsValue("");
          Swal.fire("Success", "Transcation succefull", "success");
        })
        .catch(() => {
          setIsTranscation(false);
          setIsValue("");
          Swal.fire("Warning", "Transcation Failed", "warning");
        });
    }
  };

  return (
    <>
      {" "}
      <Modal
        open={props.open}
        onClose={() => props.setOpen()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: "300" }}
      >
        {isTranscation ? (
          <>
            <Box
              sx={style}
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              ...Loading
            </Box>
          </>
        ) : (
          <Box sx={style} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ color: "white" }}
              >
                Buy Granite Room
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ color: "white" }}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsApproveDone(false);
                  props.setOpen();
                }}
              >
                X
              </Typography>
            </div>

            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <input
                  placeholder="Enter Amount"
                  type="number"
                  min="0"
                  step="any"
                  id="buyAmount"
                  value={isValue === 0 ? "" : isValue}
                  onInput={(e) => setIsValue(e.target.value)}
                  disabled={isApproveDone}
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                    outline: "none",
                    border: "0",
                    borderRadius: "5px",
                    flex: 1,
                  }}
                ></input>
                <div style={{ color: "white", marginLeft: "10px" }}>{
                      parseInt(isValue)>1?`Rooms`:`Room`
                    }</div>
              </Box>
              <Box> 
                {isValue > 0 ? (
                  <div style={{ display:"flex", color: "white", marginLeft: "10px",}}>
                    <Box>
                    {parseInt(isValue)}
                    </Box>
                    <Box
                    ml={1}
                    >
                    {
                     parseInt(isValue)>1?`Rooms : ${parseInt(isValue) * 5000} BUSD`:`Room : ${parseInt(isValue) * 5000} BUSD`
                    }
                    </Box>
                  
                  </div>
                ) : null}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "30px",
                }}
              >
                {!active ? (
                  <Button
                    sx={{
                      background:
                        "linear-gradient(to top, rgb(223, 180, 23), rgb(103, 70, 23))",
                      fontSize: { xs: "15px", md: "24px" },
                      lineHeight: "25.54px",
                      textTransform: "capitalize",
                      width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                    }}
                    color="error"
                    variant="contained"
                    target="_blank"
                    onClick={() =>
                      login(
                        window.ethereum
                          ? connectors.injected
                          : connectors.walletConnect
                      )
                    }
                  >
                    Connect
                  </Button>
                ) : (
                  <Button
                    sx={{
                      background:
                        "linear-gradient(to top, rgb(223, 180, 23), rgb(103, 70, 23))",
                      fontSize: { xs: "15px", md: "24px" },
                      lineHeight: "25.54px",
                      textTransform: "capitalize",
                      width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                    }}
                    color="error"
                    variant="contained"
                    target="_blank"
                    onClick={() => deactivate()}
                  >
                    Disconnect
                  </Button>
                )}
                <Button
                  sx={{
                    fontFamily: "Bangers",
                    backgroundColor: "#FF0000",
                    fontSize: { xs: "15px", md: "24px" },
                    lineHeight: "25.54px",
                    textTransform: "capitalize",
                    background:
                      "linear-gradient(to top, rgb(223, 180, 23), rgb(103, 70, 23))",
                    width: { xs: "80%", sm: "80%", md: "80%", lg: "30%" },
                  }}
                  color="error"
                  variant="contained"
                  target="_blank"
                  onClick={!isApproveDone ? handleApprove : handleBuy}
                >
                  {!isApproveDone ? "Approve" : "Buy"}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
}

export default BuyTokenModal;
