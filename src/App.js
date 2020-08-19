import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";

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
        <StyledSectionText id="sponsors">
          {strings.industry}
        </StyledSectionText>
      </StyledBodyWrapper>
    </div>
  );
}

export default App;
