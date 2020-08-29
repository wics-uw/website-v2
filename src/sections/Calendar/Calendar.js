import React, {Component} from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";
import {StyledCalendarSectionWrapper} from "./styles";

class Calendar extends Component {
  render() {
    return (
      <StyledCalendarSectionWrapper>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        <CalendarCard source={calendarStrings.link}/>
      </StyledCalendarSectionWrapper>
    );
  }
}

export default Calendar;
