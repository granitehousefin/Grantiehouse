import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

// Self defined components
import Notifications from "./components/Notifications";
import Header from "./components/Header";

import NotistackProvider from "./providers/NotistackProvider";
import Routes from "./routes";
import store from "./store";
import theme from "./theme/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  console.log(library);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
}
function App() {
  const { i18n } = useTranslation();
  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <RecoilRoot style={{overflow:`hidden`}}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <NotistackProvider>
                <Notifications />
                <Header
                  setOpen={handleOpen}
                  handleChangeLanguage={handleChangeLanguage}
                />
                <BrowserRouter>
                  <Routes open={open} setOpen={handleOpen} />
                </BrowserRouter>
              </NotistackProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </Provider>
      </Web3ReactProvider>
    </RecoilRoot>
  );
}

export default App;
