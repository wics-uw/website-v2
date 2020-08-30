import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/currentExecStrings";
import committee from "../../res/images/committee_placeholder.svg";
import CurrentCommitteeCard from "../../components/CurrentCommitteeCard/CurrentCommitteeCard";
import {GridColumn} from "semantic-ui-react";
import {StyledExecWrapper} from "./styles";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

// Component for current executives section
class CurrentCommittee extends Component {
  renderCard = (picture, name, position) => {
    return (
      <CurrentCommitteeCard
        picture={picture}
        name={name}
        position={position}/>
    )
  };

  render() {
    // Change current executives' images, names, and positions here
    // Picture width: 170px, height: 170px
    const executives = {
      exec1: {
        pic: committee,
        name: "Iris Chen",
        position: "Chair"
      },
      exec2: {
        pic: committee,
        name: "Vivian Liu",
        position: "Executive"
      },
      exec3: {
        pic: committee,
        name: "Audrey Ho",
        position: "Executive"
      },
      exec4: {
        pic: committee,
        name: "Areena Akhter",
        position: "Executive"
      },
      exec5: {
        pic: committee,
        name: "Jasmine Bal",
        position: "Executive"
      },
      exec6: {
        pic: committee,
        name: "Linda Yang",
        position: "Executive"
      },
      exec7: {
        pic: committee,
        name: "Angela Zhang",
        position: "Executive"
      },
    };

    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={currentExecStrings.title}
          description={currentExecStrings.term}
        />
        {/*Wrapper for display of executives*/}
        <StyledExecWrapper columns={4}>
          {Object.entries(executives).map(([key, execInfo]) => (
            <GridColumn>
              {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
            </GridColumn>
          ))}
        </StyledExecWrapper>
      </StyledSubSectionWrapper>
    )
  }
}

export default CurrentCommittee;