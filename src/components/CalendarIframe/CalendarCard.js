import React from "react";

const CalendarCard = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <div align="center">
          <iframe
            src={src}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
