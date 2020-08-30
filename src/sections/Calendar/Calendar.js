import React, {Component} from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";
import {StyledSmallSectionWrapper} from "../../res/globalStyles";

class Calendar extends Component {
  render() {
    return (
      <StyledSmallSectionWrapper>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        <CalendarCard source={calendarStrings.link}/>
      </StyledSmallSectionWrapper>
    );
  }
}

export default Calendar;
