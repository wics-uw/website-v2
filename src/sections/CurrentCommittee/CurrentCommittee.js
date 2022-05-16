import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import amanda from "../../res/images/currentExecs/amanda_bishop.jpg";
import kitty from "../../res/images/currentExecs/kitty_li.jpg";
import jaskomal from "../../res/images/currentExecs/jaskomal_natt.png";
import jui from "../../res/images/currentExecs/jui_shah.JPG";
import layne from "../../res/images/currentExecs/layne_lim_ah_tock.jpeg";
import leen from "../../res/images/currentExecs/leen_kamalmaz.jpeg";
import melanie from "../../res/images/currentExecs/melanie_foltak.jpg";
import nina from "../../res/images/currentExecs/nina_tan.jpeg";
import sachi from "../../res/images/currentExecs/sachi_shah.JPG";
import star from "../../res/images/currentExecs/star_xie.jpg";

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
        pic: amanda,
        name: "Amanda Bishop",
        position: "Co-chair"
      },
      exec2: {
        pic: kitty,
        name: "Kitty Li",
        position: "Co-chair"
      },
      exec3: {
        pic: jaskomal,
        name: "Jaskomal Natt",
        position: "Secretary"
      },
      exec4: {
        pic: jui,
        name: "Jui Shah",
        position: "Director of Outreach"
      },
      exec5: {
        pic: layne,
        name: "Layne Lim Ah Tock",
        position: "Office Manager"
      },
      exec6: {
        pic: leen,
        name: "Leen Kamalmaz",
        position: "Systems Administrator"
      },
      exec7: {
        pic: melanie,
        name: "Melanie Foltak",
        position: "Director of Publicity"
      },
      exec8: {
        pic: nina,
        name: "Nina Tan",
        position: "BigCster Director"
      },
      exec9: {
        pic: sachi,
        name: "Sachi Shah",
        position: "Finance Director"
      },
      exec10: {
        pic: star,
        name: "Star Xie",
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