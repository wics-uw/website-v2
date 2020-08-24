import React from "react";
import calendarStrings from "../../res/calendarStrings";
import { withResizeDetector } from "react-resize-detector";

const CalendarCard = ({ data, source, width }) => {
  const src = source;
  var W = Math.min(parseInt(width, 10), 1023) + 180;
  W = W < 180 ? 180 : W;
  const H = W * 0.7351;
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <div align="center">
          <iframe
            title={calendarStrings.calendarTitle}
            src={src}
            width={W}
            height={H}
            frameborder="0"
            scrolling="yes"
          />
        </div>
      </div>
    </div>
  );
};
export default withResizeDetector(CalendarCard);
// Todo: 4. Run `yarn add react-resize-detector`.
