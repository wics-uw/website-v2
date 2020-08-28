import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Structure from "./sections/Structure/Structure";
import Numbers from "./sections/Numbers/Numbers";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";

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
        <Structure />
        <Numbers/>

        <StyledSectionText id="calendar">
          {strings.calendar}
        </StyledSectionText>
        <Calendar/>

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
        <PastCommittee/>

        <StyledSectionText id="sponsors">
          {strings.industry}
        </StyledSectionText>
       
      </StyledBodyWrapper>
    </div>
  );
}

export default App;
