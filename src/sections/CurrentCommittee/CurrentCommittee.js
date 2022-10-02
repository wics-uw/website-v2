import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import priya from "../../res/images/currentExecs/priya_saha.jpg";
import molly from "../../res/images/currentExecs/molly_xu.jpg";
import claudia from "../../res/images/currentExecs/claudia_mccomb.jpeg";
import madison from "../../res/images/currentExecs/madison_mussari.jpg";
import richa from "../../res/images/currentExecs/richa_dalal.PNG";
import leen from "../../res/images/currentExecs/leen_kamalmaz.jpeg";
import melanie from "../../res/images/currentExecs/melanie_foltak.jpg";
import yani from "../../res/images/currentExecs/yani_mei.JPEG";
import vanessa from "../../res/images/currentExecs/vanessa_wong.jpeg";
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
        pic: priya,
        name: "Priyadarshini Saha",
        position: "Co-chair"
      },
      exec2: {
        pic: molly,
        name: "Molly Xu",
        position: "Co-chair"
      },
      exec3: {
        pic: star,
        name: "Star Xie",
        position: "Secretary & Director of Finance"
      },
      exec4: {
        pic: melanie,
        name: "Melanie Foltak",
        position: "Director of Outreach"
      },
      exec5: {
        pic: claudia,
        name: "Claudia McComb",
        position: "Systems Administrator"
      },
      exec6: {
        pic: leen,
        name: "Leen Kamalmaz",
        position: "Director of Publicity"
      },
      exec7: {
        pic: madison,
        name: "Madison Mussari",
        position: "Operations Manager"
      },
      exec8: {
        pic: richa,
        name: "Richa Dalal",
        position: "Director of Internal Affairs"
      },
      exec9: {
        pic: vanessa,
        name: "Vanessa Wong",
        position: "Creative Director"
      },
      exec10: {
        pic: yani,
        name: "Yani Mei",
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