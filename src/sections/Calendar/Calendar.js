import React, {Component} from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";
import {StyledCalendarSectionContainer} from "./styles";

class Calendar extends Component {
  render() {
    return (
      <StyledCalendarSectionContainer>
        <SectionTitleDescription title={calendarStrings.calendarTitle}/>
        <CalendarCard source={calendarStrings.link}/>
      </StyledCalendarSectionContainer>
    );
  }
}

export default Calendar;
