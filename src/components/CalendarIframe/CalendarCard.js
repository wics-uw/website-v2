import React from "react";
import { Component } from "react";
import calendarStrings from "../../res/calendarStrings";
import { withResizeDetector } from "react-resize-detector";

const CalendarCard = ({ source, width, height }) => {
  const src = source;
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <div align="center">
          <iframe
            title={calendarStrings.calendarTitle}
            src={src} 
            width={parseInt(width, 10)-220} 
            height={(parseInt(width, 10)-220) * 0.7351} 
            frameborder="0"
            scrolling="yes"
          />
        </div>
      </div>
    </div>
  );
  // }
};
export default withResizeDetector(CalendarCard);
