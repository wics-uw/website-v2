import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Footer from "./sections/Footer/Footer";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <StyledBodyWrapper>

        <StyledSectionText id="about">
          {strings.about}
        </StyledSectionText>
        <Mission/>

        <StyledSectionText id="getInvolved">
          {strings.getInvolved}
        </StyledSectionText>

        <StyledSectionText id="resources">
          {strings.resources}
        </StyledSectionText>

        <StyledSectionText id="committee">
          {strings.committee}
        </StyledSectionText>
        <CurrentCommittee/>

        <StyledSectionText id="sponsors">
          {strings.industry}
        </StyledSectionText>

      </StyledBodyWrapper>
      <Footer/>
    </div>
  );
}

export default App;
