import React, {useEffect} from 'react';
import Navbar from "./sections/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Numbers from "./sections/Numbers/Numbers";
import {StyledBodyContainer, StyledGradientBackground, StyledSectionText, StyledSectionWrapper} from "./res/globalStyles";
import strings from "./res/strings/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";
import BigWiCS from './sections/BigWiCS/BigWiCS';
import Sponsors from './sections/Sponsors/Sponsors';
import Resources from './sections/Resources/Resources';
import Contact from "./sections/Contact/Contact";
import Structure from "./sections/Structure/Structure";
import LittleWics from "./sections/LittleWics/LittleWics"
import Footer from "./sections/Footer/Footer";
import ReactGA from 'react-ga';



function App () {

  useEffect(() => {
    ReactGA.initialize('UA-176275520-1');

    //to report page view 
    ReactGA.pageview('/')
  }, )
  
    return (
      <div>
        <Navbar/>
        <div id={"landing"}>
          <Landing/>
        </div>
        <StyledSectionWrapper id={"about"}>
          <StyledGradientBackground>
            <StyledBodyContainer>
              <StyledSectionText>{strings.about}</StyledSectionText>
              <Mission/>
            </StyledBodyContainer>
          </StyledGradientBackground>
          <StyledBodyContainer>
            <Structure/>
            <Numbers/>
          </StyledBodyContainer>
        </StyledSectionWrapper>

        <StyledBodyContainer>
          <StyledSectionWrapper id={"calendar"}>
            <StyledSectionText>{strings.calendar}</StyledSectionText>
            <Calendar/>
          </StyledSectionWrapper>

          <StyledSectionWrapper id={"get-involved"}>
            <StyledSectionText>{strings.getInvolved}</StyledSectionText>
            <LittleWics/>
            <BigWiCS/>
          </StyledSectionWrapper>

          <StyledSectionWrapper id={"resources"}>
            <Resources/>
          </StyledSectionWrapper>

          <StyledSectionWrapper id={"sponsors"}>
            <StyledSectionText>{strings.industry}</StyledSectionText>
            <Sponsors/>
          </StyledSectionWrapper>

          <StyledSectionWrapper id={"committee"}>
            <StyledSectionText>{strings.committee}</StyledSectionText>
            <CurrentCommittee/>
            <PastCommittee/>
          </StyledSectionWrapper>

          <StyledSectionWrapper id={"contact-us"}>
            <Contact/>
          </StyledSectionWrapper>
        </StyledBodyContainer>

        <Footer/>
      </div>
    );
  
}

export default App;
