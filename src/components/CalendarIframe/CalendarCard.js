import React from "react";
import calendarStrings from "../../res/calendarStrings";

const CalendarCard = ({ source }) => {
  if (!source) {
    return <div>{calendarStrings.loadingText}</div>;
  }

  const src = source;
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <div align="center">
          <iframe
            title={calendarStrings.calendarTitle}
            src={src}
            width="1023"
            height="752"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
