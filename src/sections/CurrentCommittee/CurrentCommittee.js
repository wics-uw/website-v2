import React, {Component} from 'react';
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import kitty from "../../res/images/w23execs/kitty.jpg";
import amanda from "../../res/images/w23execs/amanda.jpg";
import veronica from "../../res/images/w23execs/veronica.jpg";
import audrey from "../../res/images/w23execs/audrey.jpg";
import yani from "../../res/images/w23execs/yani.jpg";
import layne from "../../res/images/w23execs/layne.jpg";
import shriya from "../../res/images/w23execs/shriya.jpg";
import karneet from "../../res/images/w23execs/karneet.jpg";
import prasanna from "../../res/images/w23execs/prasanna.jpg";
import helena from "../../res/images/w23execs/helena.png";

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
        pic: kitty,
        name: "Kitty Li",
        position: "Co-chair"
      },
      exec2: {
        pic: amanda,
        name: "Amanda Bishop",
        position: "Co-chair"
      },
      exec3: {
        pic: veronica,
        name: "Veronika Sustrova",
        position: "Secretary"
      },
      exec4: {
        pic: audrey,
        name: "Audrey Ho",
        position: "Director of Internal Affairs"
      },
      exec5: {
        pic: yani,
        name: "Yani Mei",
        position: "Systems Administrator"
      },
      exec6: {
        pic: layne,
        name: "Layne Lim Ah Tock",
        position: "Director of Finance"
      },
      exec7: {
        pic: shriya,
        name: "Shriya Kaistha",
        position: "Director of Pubilicity"
      },
      exec8: {
        pic: karneet,
        name: "Karneet Kaur",
        position: "Director of Outreach"
      },
      exec9: {
        pic: prasanna,
        name: "Prasanna Thallapalli",
        position: "Operations Manager"
      },
      exec10: {
        pic: helena,
        name: "Helena Xu",
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