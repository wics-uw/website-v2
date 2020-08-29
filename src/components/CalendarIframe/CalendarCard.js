import React from "react";
import calendarStrings from "../../res/calendarStrings";
import {withResizeDetector} from "react-resize-detector";
import {StyledCalendarCardWrapper} from "./styles";

const CalendarCard = ({source, width}) => {
  const src = source;
  let W = Math.min(parseInt(width, 10), 1023);
  W = W < 300 ? 300 : W;
  const H = W * 0.7351;

  return (
    <StyledCalendarCardWrapper className="embed-responsive">
      <iframe
        title={calendarStrings.calendarTitle}
        src={src}
        width={W}
        height={H}
        frameBorder="0"
        scrolling="yes"
      />
    </StyledCalendarCardWrapper>
  );
};

export default withResizeDetector(CalendarCard);
