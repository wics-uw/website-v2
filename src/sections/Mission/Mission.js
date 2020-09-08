import React, {Component} from 'react';
import missionStrings from "../../res/strings/missionStrings";
import {GridColumn} from "semantic-ui-react";
import MissionCard from "../../components/MissionCard/MissionCard";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import community from "../../res/images/mission_community.svg";
import mentorship from "../../res/images/mission_mentorship.svg";
import empowerment from "../../res/images/mission_empowerment.svg";
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import {StyledGrid, StyledGridColumn} from "./styles";

// Component for mission section
class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }


  renderComputerSize() {
    return <StyledGrid columns={3}>
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
    </StyledGrid>;
  }

  renderMobileSize() {
    return <StyledGrid columns={3}>
      <StyledGridColumn width={10}>
        <MissionCard
          image={community}
          title={missionStrings.community.title}
          description={missionStrings.community.description}/>
      </StyledGridColumn>
      <StyledGridColumn width={10}>
        <MissionCard
          image={mentorship}
          title={missionStrings.mentorship.title}
          description={missionStrings.mentorship.description}/>
      </StyledGridColumn>
      <StyledGridColumn width={10}>
        <MissionCard
          image={empowerment}
          title={missionStrings.empowerment.title}
          description={missionStrings.empowerment.description}/>
      </StyledGridColumn>
    </StyledGrid>;
  }

  render() {
    const {screenWidth} = this.state;

    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={missionStrings.ourMission}
          description={missionStrings.missionDescription}/>
        {screenWidth <= 425
          ? this.renderMobileSize()
          : this.renderComputerSize()}
      </StyledSubSectionWrapper>
    )
  }
}

export default Mission;