import React, { Component } from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";
import {StyledCalendarWrapper} from "./styles";

class Calendar extends Component {
  render() {
    return (
      <div>
        <SectionTitleDescription title={calendarStrings.calendarTitle} />
        <StyledCalendarWrapper>
          <CalendarCard source={calendarStrings.link} />
        </StyledCalendarWrapper>
      </div>
    );
  }
}

export default Calendar;
