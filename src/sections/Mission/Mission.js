import React, {Component} from 'react';
import missionStrings from "../../res/missionStrings";
import {Grid, GridColumn} from "semantic-ui-react";
import MissionCard from "../../components/MissionCard/MissionCard";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import community from "../../res/images/mission_community.svg";
import mentorship from "../../res/images/mission_mentorship.svg";
import empowerment from "../../res/images/mission_empowerment.svg";
import {StyledMissionSectionWrapper} from "./styles";

// Component for mission section
class Mission extends Component {
  render() {
    return (
      <StyledMissionSectionWrapper>
        {/*Section title & description*/}
        <SectionTitleDescription
          title={missionStrings.ourMission}
          description={missionStrings.missionDescription}/>
        {/*Mission cards*/}
        <Grid columns={3}>
          <GridColumn>
            <MissionCard
              image={community}
              title={missionStrings.community.title}
              description={missionStrings.community.description}/>
          </GridColumn>
          <GridColumn>
            <MissionCard
              image={mentorship}
              title={missionStrings.mentorship.title}
              description={missionStrings.mentorship.description}/>
          </GridColumn>
          <GridColumn>
            <MissionCard
              image={empowerment}
              title={missionStrings.empowerment.title}
              description={missionStrings.empowerment.description}/>
          </GridColumn>
        </Grid>
      </StyledMissionSectionWrapper>
    )
  }
}

export default Mission;