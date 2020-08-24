import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import StudentLed from './sections/StudentLed/StudentLed'

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
        <StudentLed/>

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
    </div>
  );
}

export default App;
