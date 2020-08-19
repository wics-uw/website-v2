import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import {StyledBodyWrapper, StyledSectionWrapper} from "./res/globalStyles";
import strings from "./res/strings";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <StyledBodyWrapper>
        <StyledSectionWrapper>
          {strings.about}
        </StyledSectionWrapper>
        <Mission/>
      </StyledBodyWrapper>
    </div>
  );
}

export default App;
