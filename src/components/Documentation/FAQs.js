import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import pdf from "../../Files/Question.pdf";

const FAQs = (props) => {
  return (
    <Box  
    height={`100vh`}
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
          src={process.env.PUBLIC_URL + "assets/images/sidebar-ico/FAQsInactive.svg"}
          alt="logo"
          width={70}
        />
        <Typography
         fontSize={{lg:48,md:48,sm:48,xs:18}}
          color={`rgb(223, 180, 23)`}
          px={3}
          fontWeight={700}
        >
          FAQs
        </Typography>
      </Box>
      <Typography
        fontSize={30}
        color={`rgb(230, 230, 230)`}
        fontWeight={600}
        px={5}
        pt={2}
      >
        Granite House Frequently Asked Questions (FAQs)
      </Typography>

      <a href={pdf} target="blank" style={{textDecoration: "none"}}>
      <Box 
       ml={4}
       pt={5}
       pb={1}
      >
      <img
          src={process.env.PUBLIC_URL + "assets/images/Question.png"}
          alt="logo"
          width={`50%`}
        />
      </Box>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        ml={4}
        pt={1}
        >
        Click to read Frequently Asked Questions
        </Typography>
      </a>

      {/* <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={3}
      >
        Granite House exists to provide unique, high quality, safe and easy-to-use products and services that provide utility within the
        cryptocurrency environment and beyond. We are laying a firm foundation to build a billion dollar project to make great gains for
        our early investors who seize the opportunity. Granite House’s products and services would contribute to the DeFi space by
        setting a standard of stability, security and solidity for other protocols to emulate. We are always guided by difference and
        excellence. Difference captures the idea of innovation and producing something unique. Excellence involves doing it so well
        the final outcome is outstanding. We hope to achieve our mission following key values stated in our Achievement Plan (see
        Granite House Whitepaper and Granite House Culture): Trust & Security, Professionalism, Value, Great Community, and
        Successful Marketing
      </Typography>

      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={3}
      >
        The following are questions for the team to deliberate on. From this, there would be Frequently Asked Questions (FAQs). The
        questions are broken down into 4 parts:
      </Typography>

      <Typography
        px={2}
      >
        <ul>
          <li>Foundation</li>
          <li>Building</li>
          <li>Decorations</li>
          <li>Living</li>
        </ul>
      </Typography>

      <Typography
        fontSize={30}
        color={`rgb(230, 230, 230)`}
        fontWeight={600}
        px={5}
        pt={2}
      >
        Part 1: Foundation
      </Typography>
      <Typography
        fontSize={16}
        color={`rgb(230, 230, 230)`}
        fontWeight={400}
        px={5}
        pt={3}
      >
        These are foundational questions regarding pre-project, initiation, analysis, goals, objectives etc.
      </Typography>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          1. What is Granite House all about?
        </Typography>

        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: Granite House is a decentralised finance (DeFi) protocol. Granite House is keen to ensure its products and services would
          contribute to the DeFi space by setting a standard of stability, security and solidity for other protocols to emulate. Like a house
          with different floors, Granite House is aiming to be an expansive ecosystem having products like Granite Swap, Granite Bridge,
          Granite Farming, Granite Play, Granite Empire, Granite Wallet, Granite NFTs, Granite Activity, Granite Mountain, Granite Venture
          Capital, Granite Mansion, Granite Marketplace and Granite Charity. Ultimately, Granite House would grow to become the owner
          of the premier blockchain for the DeFi space: Granite Blockchain.
        </Typography>
      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          2. How do we intend to put together the right team to build Granite House?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: The Granite House Team would comprise of five (5) core members. There would be like a chief executive or Granite House
          Executive (GHE) who would co-ordinate everything; more like a foreman on a site who makes sure that work is carried out
          according to plan. There would also be two technical managers who handle the product development side of the project.
          Furthermore, a marketing and community manager would handle both marketing issues and moderate the social media
          platforms. Finally, there would be a graphic designer to help Granite House build a distinctive brand with visual appeal.
          Moreover, as the project grows, the team would consider adding to the team and buying-in specialist help if needed
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          3. How will the team be paid?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: The team would get compensated for their services through $GRNT (Granite tokens). There would be an initial allocation of
          6% (60m tokens) of the total supply (1 billion tokens). This would vest at 5% per month over 20 months. In addition, there is a
          Page 3 of 15
          6% allocation for bonus team tokens. These bonus tokens would be locked until the team achieve a $1 billion valuation or a
          price of $1 per $GRNT token. This has been structured to motivate the team to work hard. Furthermore, those bonus tokens
          would vest over 20 months to avoid a short-term view or a dump from the team. Granite House is adopting a long-term view to
          the project. As well, there would be cash bonuses for the team based on the performance of the protocol (see Granite House
          Compensation Package [GHD003])
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          4. What experience does the team have to deliver a successful project?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: We are a team of cryptocurrency experts who have been in the market since 2013. We have gained significant experience of
          how the market works. Having acquired relevant and expansive knowledge and skills over this period, we know what works
          and what does not work. We hope to leverage our skills and expertise to create a viable and stable protocol. We have been
          victims of rug-pulls and experienced platforms that have failed to deliver on their promises. For that, we would seek to do
          better and under-promise and over-deliver as we seek to exceed the expectations of our community
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          5. What sort of “house” or protocol are we attempting to build?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: Our dream is big, but we are equally practical in our thinking. We intend to start small and expand with time. Initially, we
          would launch on the BNB Chain and later expand to other chains. As per the Granite House Whitepaper, we would deliver our
          ideas in four phases:
          <br></br>
          <br></br>
          Phase 1 – Granite Swap, Granite Bridge, Granite Farming, Granite Play, Granite Empire
          <br></br>
          <br></br>
          Phase 2 – Granite NFTs, Granite Activity, Granite Mountain, Granite Wallet
          <br></br>
          <br></br>
          Phase 3 – Granite Venture Capital, Granite Mansion, Granite Marketplace, Granite Charity
          <br></br>
          <br></br>
          Phase 4 – Blockchain
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          6. How much money do we need or hope to raise?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: We would carry out a sod-cutting ceremony (private sale) selling 100 Granite Rooms (GRs) each costing $5,000 and raising
          $500,000 in the process. In effect, we are offering 100 people a lifetime opportunity to partner with us on this exciting journey.
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          7. Can investors take out their stake earlier due to unforeseen circumstances?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: To ensure the stability of our platform, there would be vesting in place for the sod-cutting ceremony participants and they
          would realise all their purchased tokens over a 24-month period
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          8. How are we going to raise that money?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: We intend to carry out the sod-cutting ceremony on our website. This is a unique opportunity for early investors to get a
          heavily discounted price of effectively $0.005 per Granite token ($GRNT). We have decided to dispense with a public sale and
          proceed to listing at $0.01.
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          9. How are we going to assign roles and responsibilities?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: The Granite House Executive (GHE) would be in charge of distributing roles and responsibilities to the technical managers,
          marketing and community manager and graphic designer. They would report to the GHE whose job it is to make sure that the
          Page 5 of 15
          other team members are offering their best efforts to the success of the project (see Granite House Roles and Responsibilities
          [GHD002]).
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          10. Are we going to do everything ourselves or going to buy-in help, and if so, where will we find credible
          people to hire?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: Initially, the team would be very hands-on and carry out the vast majority of the tasks, but as the protocol gains traction and
          grows with greater tasks and demands, the team would get extra help as needed. After all, we have in mind to grow and
          exceed a billion dollars and the core team would certainly need to expand and bring in the right people who identify with
          Granite House’s values and ethos to contribute to greater success. When we commence recruitment we would be
          conscientious in scrutinising potential applicants ensuring we hire the best and most motivated people who identify with
          values discussed in the Granite House Culture (GHD004).
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          11. What’s our plan for things like integrity, KYC, doxx?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: Trust & Security is our number one value. For that we would seek to have an audit by CERTIK, a premier auditing firm in the
          cryptocurrency space. This should demonstrate our integrity to the community. Moreover, we intend to have KYC carried out
          by other firms like DeFiShield to name a few. As the platform grows and becomes more successful, the team would consider
          the benefits of being doxxed as against remaining anonymous.
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          12. When do we intend to start building or commence the project?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: We intend to use the month of May and early June 2022 for all the preparatory work and to fundraise for the project. After
          the fundraising, in the month of June, the team would concentrate on at least one of the projects in Phase One of the project’s
          road map. The main starting product would be Granite Swap (while also working on Granite Farming, and Granite Bridge). This
          should ensure that by the time we launch we have working products to offer to the market which should generate funds to
          support the protocol. The intended date of launch is Monday 14
          th July, 2022. This date has been chosen to also allow the team
          to carry out significant marketing to generate interest to make the launch a success.
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          13. How long do we expect to take building?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: We hope to keep the community excited as we have many plans in mind as per our Granite Story (GHD001) and Granite
          Whitepaper (GHD007). The numerous projects we have in mind should make investors see this as being a long-term platform.
          We are here to build something that lasts. We hope to deliver all the products mentioned in our whitepaper and more. After all,
          we are Granite House, and we believe in innovation and bringing great products to the market.
        </Typography>

      </Box>

      <Box>
        <Typography
          fontSize={25}
          color={`rgb(230, 230, 230)`}
          fontWeight={600}
          px={5}
          pt={2}
        >
          14. What incentives do you have in mind for investors to hold the tokens long-term while Granite House gets
          built?
        </Typography>
        <Typography
          ontSize={16}
          color={`rgb(230, 230, 230)`}
          fontWeight={400}
          px={5}
          pt={3}
        >
          A: Most people take a short-term view to projects because they see them as being pump and dumps. However, most investors
          are smart and upon seeing a protocol like Granite House with a long-term focus, they would consider carefully whether to sell
          their tokens or hold. We intend to run this protocol and build something solid paying attention to price, utility and community to
          Page 7 of 15
          ensure we continue to deliver value to investors. We believe investors would see this and buy into the vision of Granite House
          and hold for significant future price appreciation rather than selling for a quick profit. Moreover, we intend to offer reflections
          for those who hold their tokens and this should encourage more people to hold rather than sell their tokens.
        </Typography>

      </Box> */}
 <div style={{ padding:"0 10px",display: "flex", justifyContent: "space-between" , marginBottom:"20px"}}>

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
      Previous - Social Media
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
      Next - Disclaimer
    </Typography>
    <Typography fontSize={16} color={`rgb(50, 50, 50)`}>
    
    </Typography>
  </Box>
</Box>
</div>
    </Box>
  );
};

export default FAQs;
