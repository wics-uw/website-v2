import React, {Component} from 'react';
import missionStrings from "../../res/missionStrings";
import {StyledMissionDescription, StyledMissionTitle} from "./styles";

class Mission extends Component {
  render() {
    return (
      <div>
        <StyledMissionTitle>
          {missionStrings.ourMission}
        </StyledMissionTitle>
        <StyledMissionDescription>
          {missionStrings.missionDescription}
        </StyledMissionDescription>
      </div>
    )
  }
}

export default Mission;