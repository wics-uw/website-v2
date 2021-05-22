import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";
import committee from "../../res/images/currentExecs/committee_placeholder.svg";

// current committee member pictures
import audrey from "../../res/images/currentExecs/audrey_ho.jpg";
import maryam from "../../res/images/currentExecs/maryam_afshar.jpg";
import jaskomal from "../../res/images/currentExecs/jaskomal_natt.png";
import nina from "../../res/images/currentExecs/nina_tan.jpg";
import richa from "../../res/images/currentExecs/richa_dalal.jpg";
import angelina from "../../res/images/currentExecs/angelina_jin.jpg";
import celine from "../../res/images/currentExecs/celine_lee.jpg";

import CurrentCommitteeCard from "../../components/CurrentCommitteeCard/CurrentCommitteeCard";
import {GridColumn} from "semantic-ui-react";
import {StyledCurrExecSectionWrapper, StyledExecWrapper, StyledGridColumn, StyledMobileTerm} from "./styles";

// Component for current executives section
class CurrentCommittee extends Component {

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


  renderCard = (picture, name, position) => {
    return (
      <CurrentCommitteeCard
        picture={picture}
        name={name}
        position={position}/>
    )
  };

  renderComputerSize(executives) {
    return <StyledExecWrapper columns={4}>
      {Object.entries(executives).map(([key, execInfo]) => (
        <GridColumn>
          {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
        </GridColumn>
      ))}
    </StyledExecWrapper>;
  }

  renderMobileSize(executives) {
    return <div>
      <StyledMobileTerm>
        {currentExecStrings.term}
      </StyledMobileTerm>
      <StyledExecWrapper columns={2}>
        {Object.entries(executives).map(([key, execInfo]) => (
          <StyledGridColumn>
            {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
          </StyledGridColumn>
        ))}
      </StyledExecWrapper>
    </div>;
  }

  render() {
    const {screenWidth} = this.state;
    // Change current executives' images, names, and positions here
    const executives = {
      exec1: {
        pic: audrey,
        name: "Audrey Ho",
        position: "Chair"
      },
      exec2: {
        pic: angelina,
        name: "Angelina Jin",
        position: "Executive"
      },
      exec3: {
        pic: celine,
        name: "Celine Lee",
        position: "Executive"
      },
      exec4: {
        pic: jaskomal,
        name: "Jaskomal Natt",
        position: "Executive"
      },
      exec5: {
        pic: maryam,
        name: "Maryam Afshar",
        position: "Executive"
      },
      exec6: {
        pic: nina,
        name: "Nina Tan",
        position: "Executive"
      },
      exec7: {
        pic: richa,
        name: "Richa Dalal",
        position: "Executive"
      },
    };

    return (
      <StyledCurrExecSectionWrapper>
        <SectionTitleDescription
          title={currentExecStrings.title}
          description={screenWidth <= 425 ? '' : currentExecStrings.term}
        />
        {screenWidth <= 425 ? this.renderMobileSize(executives) : this.renderComputerSize(executives)}
      </StyledCurrExecSectionWrapper>
    )
  }

}

export default CurrentCommittee;