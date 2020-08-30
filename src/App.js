import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Numbers from "./sections/Numbers/Numbers";
import Footer from "./sections/Footer/Footer";
import {StyledBodyWrapper, StyledSectionText} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";
import Resources from './sections/Resources/Resources';
import resourceImg from './res/images/resource.svg';
import {Illustration} from './sections/Resources/styles';

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
        <StyledSectionText id="getInvolved">
          {strings.getInvolved}
        </StyledSectionText>

        <Illustration src ={resourceImg}/>
        <StyledSectionText id="resources">
          {strings.resources}
        </StyledSectionText>
        <Resources/>

        <StyledSectionText id="committee">
          {strings.committee}
        </StyledSectionText>
        <CurrentCommittee/>
        <PastCommittee/>

        <StyledSectionText id="sponsors">
          {strings.industry}
        </StyledSectionText>

      </StyledBodyWrapper>
      <Footer/>
    </div>
  );
}

export default App;
