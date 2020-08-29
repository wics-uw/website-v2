import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Numbers from "./sections/Numbers/Numbers";
import Footer from "./sections/Footer/Footer";
import {StyledBodyContainer, StyledGradientBackground, StyledSectionText, StyledLargeSectionWrapper} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  //refs
  landing = React.createRef();
  about = React.createRef();
  calendar = React.createRef();
  getInvolved = React.createRef();
  resources = React.createRef();
  sponsors = React.createRef();
  committee = React.createRef();
  contactUs = React.createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  componentDidUpdate = () => {
    this.scrollToSection(this.state.selected);
  };

  scrollToSection = index => {
    let refs = [
      this.landing,
      this.about,
      this.calendar,
      this.getInvolved,
      this.resources,
      this.sponsors,
      this.committee,
      this.contactUs
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar changeSelection={this.changeSelection}/>
        <div ref={this.landing}>
          <Landing/>
        </div>
        <StyledLargeSectionWrapper ref={this.about}>
          <StyledGradientBackground>
            <StyledBodyContainer>
              <StyledSectionText>{strings.about}</StyledSectionText>
              <Mission/>
            </StyledBodyContainer>
          </StyledGradientBackground>
          <StyledBodyContainer>
            <Numbers/>
          </StyledBodyContainer>
        </StyledLargeSectionWrapper>

        <StyledBodyContainer>
          <StyledLargeSectionWrapper ref={this.calendar}>
            <StyledSectionText>{strings.calendar}</StyledSectionText>
            <Calendar/>
          </StyledLargeSectionWrapper>

          <StyledLargeSectionWrapper ref={this.getInvolved}>
            <StyledSectionText>{strings.getInvolved}</StyledSectionText>
          </StyledLargeSectionWrapper>

          <StyledLargeSectionWrapper ref={this.resources}>
            <StyledSectionText>{strings.resources}</StyledSectionText>
          </StyledLargeSectionWrapper>

          <StyledLargeSectionWrapper ref={this.sponsors}>
            <StyledSectionText>{strings.industry}</StyledSectionText>
          </StyledLargeSectionWrapper>

          <StyledLargeSectionWrapper ref={this.committee}>
            <StyledSectionText>{strings.committee}</StyledSectionText>
            <CurrentCommittee/>
            <PastCommittee/>
          </StyledLargeSectionWrapper>

          <StyledLargeSectionWrapper ref={this.contactUs}>
            <StyledSectionText>{strings.contactUs}</StyledSectionText>
          </StyledLargeSectionWrapper>
        </StyledBodyContainer>
        <Footer/>
      </div>
    );
  }
}

export default App;
