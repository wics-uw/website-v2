import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Numbers from "./sections/Numbers/Numbers";
import Footer from "./sections/Footer/Footer";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import Sponsors from './sections/Sponsors/Sponsors';



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
        
        <StyledSectionText id="sponsors">
          {strings.industry}
        </StyledSectionText>
        
        <Sponsors/>
      </StyledBodyWrapper>
      <Footer/>
    </div>
  );
}

export default App;
