import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";
import committee from "../../res/images/currentExecs/committee_placeholder.svg";

// current committee member pictures
import amanda from "../../res/images/currentExecs/amanda_bishop.jpg";
import angelina from "../../res/images/currentExecs/angelina_jin.jpg";
import claudia from "../../res/images/currentExecs/claudia_mccomb.jpg";
import kitty from "../../res/images/currentExecs/kitty_li.jpg";
import leen from "../../res/images/currentExecs/leen_kamalmaz.JPG";
import maryam from "../../res/images/currentExecs/maryam_afshar.jpg";
import melanie from "../../res/images/currentExecs/melanie_foltak.jpg";
import priya from "../../res/images/currentExecs/priya_saha.jpg";

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
        pic: priya,
        name: "Priyadarshini Saha",
        position: "Chair"
      },
      exec2: {
        pic: amanda,
        name: "Amanda Bishop",
        position: "Systems Administrator"
      },
      exec3: {
        pic: angelina,
        name: "Angelina Jin",
        position: "BigCS Director"
      },
      exec4: {
        pic: claudia,
        name: "Claudia McComb",
        position: "Secretary & Finance Director"
      },
      exec5: {
        pic: kitty,
        name: "Kitty Li",
        position: "Director of Publicity"
      },
      exec6: {
        pic: leen,
        name: "Leen Kamalmaz",
        position: "First Year Representative"
      },
      exec7: {
        pic: maryam,
        name: "Maryam Afshar",
        position: "Director of Outreach"
      },
      exec8: {
        pic: melanie,
        name: "Melanie Foltak",
        position: "First Year Representative"
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