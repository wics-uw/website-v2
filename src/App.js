import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import PastExecutives from "./sections/PastExecutives/PastExecutives";
import { StyledBodyWrapper, StyledSectionText } from "./res/globalStyles";
import strings from "./res/strings";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <StyledBodyWrapper>
        <StyledSectionText id="about">{strings.about}</StyledSectionText>
        <Mission />
        <StyledSectionText id="getInvolved">
          {strings.getInvolved}
        </StyledSectionText>
        <StyledSectionText id="resources">
          {strings.resources}
        </StyledSectionText>
        <StyledSectionText id="committee">
          {strings.committee}
        </StyledSectionText>
        <StyledSectionText id="sponsors">{strings.industry}</StyledSectionText>
      </StyledBodyWrapper>
      <PastExecutives></PastExecutives>
      <Footer></Footer>
    </div>
  );
}

export default App;
