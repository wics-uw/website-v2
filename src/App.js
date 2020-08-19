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
        <StyledSectionText>
          {strings.about}
        </StyledSectionText>
        <Mission/>
        <StyledSectionText>
          {strings.getInvolved}
        </StyledSectionText>
        <StyledSectionText>
          {strings.resources}
        </StyledSectionText>
        <StyledSectionText>
          {strings.committee}
        </StyledSectionText>
        <StyledSectionText>
          {strings.industry}
        </StyledSectionText>
      </StyledBodyWrapper>
    </div>
  );
}

export default App;
