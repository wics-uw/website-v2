import React from "react";
import calendarStrings from "../../res/calendarStrings";
import { withResizeDetector } from "react-resize-detector";

const CalendarCard = ({ data, source, width }) => {
  const src = source;
  let W = Math.min(parseInt(width, 10), 1023);
  W = W < 300 ? 300 : W;
  const H = W * 0.7351;
  return (
    <div className="col-md-12">
      <div className="embed-responsive">
        <div align="center">
          <iframe
            title={calendarStrings.calendarTitle}
            src={src}
            width={W}
            height={H}
            frameBorder="0"
            scrolling="yes"
          />
        </div>
      </div>
    </div>
  );
};
export default withResizeDetector(CalendarCard);
