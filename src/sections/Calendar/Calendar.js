import React, { Component } from "react";
import CalendarStrings from "../../res/CalendarStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import CalendarCard from "../../components/CalendarIframe/CalendarCard";

class Calendar extends Component {
  render() {
    return (
      <div>
        <SectionTitleDescription
          title={CalendarStrings.calendarTitle}
        ></SectionTitleDescription>
        <div class="ui hidden divider"></div>
        <div className="Calendar">
          <CalendarCard source={CalendarStrings.link} />
        </div>
      </div>
    );
  }
}

export default Calendar;

