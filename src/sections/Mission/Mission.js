import React, {Component} from 'react';
import missionStrings from "../../res/strings/missionStrings";
import {Grid, GridColumn} from "semantic-ui-react";
import MissionCard from "../../components/MissionCard/MissionCard";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import community from "../../res/images/mission_community.svg";
import mentorship from "../../res/images/mission_mentorship.svg";
import empowerment from "../../res/images/mission_empowerment.svg";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

// Component for mission section
class Mission extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
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
      </StyledSubSectionWrapper>
    )
  }
}

export default Mission;