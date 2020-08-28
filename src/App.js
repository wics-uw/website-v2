import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import Mission from "./sections/Mission/Mission";
import Calendar from "./sections/Calendar/Calendar";
import Numbers from "./sections/Numbers/Numbers";
import Footer from "./sections/Footer/Footer";
import {StyledSectionText, StyledSectionWrapper} from "./res/globalStyles";
import strings from "./res/strings";
import CurrentCommittee from "./sections/CurrentCommittee/CurrentCommittee";
import PastCommittee from "./sections/PastCommittee/PastCommittee";
import {Container} from "semantic-ui-react";

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
        <StyledSectionWrapper ref={this.about}>
          <Container style={{width: '1040px'}}>
            <StyledSectionText>{strings.about}</StyledSectionText>
          </Container>
          <Mission/>
          <Numbers/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.calendar}>
          <StyledSectionText>{strings.calendar}</StyledSectionText>
          <Calendar/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.getInvolved}>
          <StyledSectionText>{strings.getInvolved}</StyledSectionText>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.resources}>
          <StyledSectionText>{strings.resources}</StyledSectionText>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.sponsors}>
          <StyledSectionText>{strings.industry}</StyledSectionText>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.committee}>
          <StyledSectionText>{strings.committee}</StyledSectionText>
          <CurrentCommittee/>
          <PastCommittee/>
        </StyledSectionWrapper>

        <StyledSectionWrapper ref={this.contactUs}>
          <StyledSectionText>{strings.contactUs}</StyledSectionText>
        </StyledSectionWrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
