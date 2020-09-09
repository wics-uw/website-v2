import React, {Component} from "react";
import calendarStrings from "../../res/strings/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarIframe";
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import {StyledButtonMobile, StyledButtonWrapper} from "./styles";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }

  renderButtonMobile() {
    return (
      <StyledButtonWrapper>
        <StyledButtonMobile href={calendarStrings.link} target="_blank">
          {calendarStrings.view}
        </StyledButtonMobile>
      </StyledButtonWrapper>
    )
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        {screenWidth <= 425
          ? this.renderButtonMobile()
          : <CalendarCard source={calendarStrings.link}/>}
      </StyledSubSectionWrapper>
    );
  }
}

export default Calendar;
