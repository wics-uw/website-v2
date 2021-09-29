import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";
import committee from "../../res/images/currentExecs/committee_placeholder.svg";

// current committee member pictures
import molly from "../../res/images/currentExecs/molly_xu.png";
import khloe from "../../res/images/currentExecs/khloe_ramdhan.jpeg";
import sakina from "../../res/images/currentExecs/sakina_mithani.jpeg";
import claudia from "../../res/images/currentExecs/claudia_mccomb.jpeg";
import angel from "../../res/images/currentExecs/angel_li.jpeg";
import sophia from "../../res/images/currentExecs/sophia_li.jpeg";
import angela from "../../res/images/currentExecs/angela_zhang.png";
import priya from "../../res/images/currentExecs/priya_saha.jpeg";

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
        pic: sophia,
        name: "Sophia Li",
        position: "Co-Chair"
      },
      exec2: {
        pic: sakina,
        name: "Sakina Mithani",
        position: "Co-Chair"
      },
      exec3: {
        pic: angel,
        name: "Angel Li",
        position: "Executive"
      },
      exec4: {
        pic: molly,
        name: "Molly Xu",
        position: "Executive"
      },
      exec5: {
        pic: khloe,
        name: "Khloe Ramdhan",
        position: "Executive"
      },
      exec6: {
        pic: priya,
        name: "Priyadarshini Saha",
        position: "Executive"
      },
      exec7: {
        pic: claudia,
        name: "Claudia McComb",
        position: "Executive"
      },
      exec8: {
        pic: angela,
        name: "Angela Zhang",
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