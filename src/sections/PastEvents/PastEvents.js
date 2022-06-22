import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple from "../../components/PastEventsCard/PastEventsCard";
import Section from "../../components/PastEventsCard/Section";
import title2 from "../../../src/res/strings/pastEventsStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";


const PastEvents = ({ deviceType }) => {
  return (
    <div>
    <SectionTitleDescription title={title2.title}/>
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
    </div>
  );
};
PastEvents.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default PastEvents;