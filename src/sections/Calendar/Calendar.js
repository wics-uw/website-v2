import React, {Component} from "react";
import calendarStrings from "../../res/strings/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarIframe";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

class Calendar extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        <CalendarCard source={calendarStrings.link}/>
      </StyledSubSectionWrapper>
    );
  }
}

export default Calendar;
