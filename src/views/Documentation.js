import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarItem from "../components/Documentation/SidebarItem";
import ProtocolSummary from "../components/Documentation/ProtocolSummary";
import Story from "../components/Documentation/Story";
import Whitepaper from "../components/Documentation/Whitepaper";
import Tokenomics from "../components/Documentation/Tokenomics";
import ProjectPhases from "../components/Documentation/ProjectPhases";
import Swap from "../components/Documentation/Swap";
import Website from "../components/Documentation/Website";
import SocialMedia from "../components/Documentation/SocialMedia";
import FAQs from "../components/Documentation/FAQs";
import Disclamer from "../components/Documentation/Disclamer";
const Documentation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box backgroundColor={`#000`} color={`#fff`}>
      <Box display={`flex`}>
        <Box
        // width={{ lg: 150, md: 120, sm: 100, xs: 80 }}
          display={{lg:`flex`,md:`flex`, sm:'none',xs:`none`}}
          flexDirection={`column`}
          borderRight={`1px solid rgb(233, 180, 43)`}
          pl={3}
        >
          <Typography mt={5} mb={1} color={`rgb(200, 200, 200)`}>
            INTRODUCTION
          </Typography>
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/ProtocolSummaryActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/ProtocolSummaryInactive.svg"
            }
            title={`Project Summary`}
            active={activeTab == 0}
            setTab={() => setActiveTab(0)}
          />
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/StoryActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/StoryInactive.svg"
            }
            title={`Granite Story`}
            active={activeTab == 1}
            setTab={() => setActiveTab(1)}
          />
          <Typography mt={5} mb={1} color={`rgb(200, 200, 200)`}>
            PROTOCOL INFORMATION
          </Typography>

          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/WhitepaperActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/WhitepaperInactive.svg"
            }
            title={`Whitepaper`}
            active={activeTab == 2}
            setTab={() => setActiveTab(2)}
          />

          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/TokenomicsActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/TokenomicsInactive.svg"
            }
            title={`Tokenomics & Taxes`}
            active={activeTab == 3}
            setTab={() => setActiveTab(3)}
          />
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/ProjectPhasesActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/ProjectPhasesInactive.svg"
            }
            title={`Project Phases`}
            active={activeTab == 4}
            setTab={() => setActiveTab(4)}
          />
          <Typography mt={5} mb={1} color={`rgb(200, 200, 200)`}>
            APPLICATIONS
          </Typography>
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/SwapActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/SwapInactive.svg"
            }
            title={`Swap`}
            active={activeTab == 5}
            setTab={() => setActiveTab(5)}
          />
          <Typography mt={5} mb={1} color={`rgb(200, 200, 200)`}>
            WEBSITE AND SOCIAL MEDIA
          </Typography>
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/WebsiteActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/WebsiteInactive.svg"
            }
            title={`Website`}
            active={activeTab == 6}
            setTab={() => setActiveTab(6)}
          />
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/SocialMediaActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/SocialMediaInactive.svg"
            }
            title={`Social Media`}
            active={activeTab == 7}
            setTab={() => setActiveTab(7)}
          />
          <Typography mt={5} mb={1} color={`rgb(200, 200, 200)`}>
            GENERAL
          </Typography>
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/FAQsActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/FAQsInactive.svg"
            }
            title={`FAQs`}
            active={activeTab == 8}
            setTab={() => setActiveTab(8)}
          />
          <SidebarItem
            activeIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/DisclamerActive.svg"
            }
            inactiveIcon={
              process.env.PUBLIC_URL +
              "assets/images/sidebar-ico/DisclamerInactive.svg"
            }
            title={`Disclaimer`}
            active={activeTab == 9}
            setTab={() => setActiveTab(9)}
          />
        </Box>
        <Box width={`100%`}>
          {activeTab == 0 && (
            <ProtocolSummary onClick={() => setActiveTab(activeTab + 1)} />
          )}
          {activeTab == 1 && (
            <Story onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)} />
          )}
          {activeTab == 2 && (
            <Whitepaper onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)} />
          )}
          {activeTab == 3 && (
            <Tokenomics onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)} />
          )}{" "}
          {activeTab == 4 && (
          <ProjectPhases  onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>
          )}
          {activeTab == 5 && 
          <Swap  onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>}
          {activeTab == 6 && 
          
          <Website  onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>}
          {activeTab == 7 && 
          <SocialMedia  onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>}
          {activeTab == 8 && 
          <FAQs  onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>}
          {activeTab == 9 && 
          <Disclamer onPreviousClick={() => setActiveTab(activeTab - 1)} onClick={() => setActiveTab(activeTab + 1)}/>}
        </Box>
      </Box>
    </Box>
  );
};

export default Documentation;
