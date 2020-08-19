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
      </StyledBodyWrapper>
    </div>
  );
}

export default App;
