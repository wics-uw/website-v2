import React, { Component } from "react";
import calendarStrings from "../../res/calendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";

class Calendar extends Component {
  render() {
    return (
      <div>
        <SectionTitleDescription title={calendarStrings.calendarTitle} />
        <div class="ui hidden divider" />
        <div className="Calendar">
          <CalendarCard source={calendarStrings.link} />
        </div>
      </div>
    );
  }
}

export default Calendar;
