import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/currentExecStrings";
import committee from "../../res/images/committee_placeholder.svg";
import CurrentCommitteeCard from "../../components/CurrentCommitteeCard/CurrentCommitteeCard";
import {GridColumn} from "semantic-ui-react";
import {StyledExecWrapper} from "./styles";

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
    // Change executives' images, names, and positions here
    // Picture width: 170px, height: 170px
    const executives = {
      iris: {
        pic: committee,
        name: "Iris Chen",
        position: "Chair"
      },
      vivian: {
        pic: committee,
        name: "Vivian Liu",
        position: "Executive"
      },
      audrey: {
        pic: committee,
        name: "Audrey Ho",
        position: "Executive"
      },
      areena: {
        pic: committee,
        name: "Areena Akhter",
        position: "Executive"
      },
      jasmine: {
        pic: committee,
        name: "Jasmine Bal",
        position: "Executive"
      },
      linda: {
        pic: committee,
        name: "Linda Yang",
        position: "Executive"
      },
      angela: {
        pic: committee,
        name: "Angela Zhang",
        position: "Executive"
      },
    };

    return (
      <div>
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
      </div>
    )
  }
}

export default CurrentCommittee;