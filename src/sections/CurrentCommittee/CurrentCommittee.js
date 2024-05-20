import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import Layne from "../../res/images/s24execs/Layne.png";
import Dora from "../../res/images/s24execs/Dora.png";
import Sachi from "../../res/images/s24execs/Sachi.jpeg";
import Damilola from "../../res/images/s24execs/Dami.png";
import Hanya from "../../res/images/s24execs/Hanya.png";
import Jemima from "../../res/images/s24execs/Jemima.png";
import Vanshika from "../../res/images/s24execs/Vanshika.jpeg";
import Neelab from "../../res/images/s24execs/Neelab.jpg";
import Shriya from "../../res/images/s24execs/Shriya.jpg";
import Amya from "../../res/images/s24execs/Amya.jpg";

import CurrentCommitteeCard from "../../components/CurrentCommitteeCard/CurrentCommitteeCard";
import { GridColumn } from "semantic-ui-react";
import {
  StyledCurrExecSectionWrapper,
  StyledExecWrapper,
  StyledGridColumn,
  StyledMobileTerm,
} from "./styles";

// Component for current executives section
class CurrentCommittee extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  renderCard = (picture, name, position) => {
    return (
      <CurrentCommitteeCard picture={picture} name={name} position={position} />
    );
  };

  renderComputerSize(executives) {
    return (
      <StyledExecWrapper columns={4}>
        {Object.entries(executives).map(([key, execInfo]) => (
          <GridColumn>
            {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
          </GridColumn>
        ))}
      </StyledExecWrapper>
    );
  }

  renderMobileSize(executives) {
    return (
      <div>
        <StyledMobileTerm>{currentExecStrings.term}</StyledMobileTerm>
        <StyledExecWrapper columns={2}>
          {Object.entries(executives).map(([key, execInfo]) => (
            <StyledGridColumn>
              {this.renderCard(execInfo.pic, execInfo.name, execInfo.position)}
            </StyledGridColumn>
          ))}
        </StyledExecWrapper>
      </div>
    );
  }

  render() {
    const { screenWidth } = this.state;
    // Change current executives' images, names, and positions here
    const executives = {
      exec1: {
        pic: Layne,
        name: "Layne Lim",
        position: "Co-chair",
      },
      exec2: {
        pic: Dora,
        name: "Dora Su",
        position: "Co-chair",
      },
      exec3: {
        pic: Sachi,
        name: "Sachi Shah",
        position: "Secretary",
      },
      exec4: {
        pic: Damilola,
        name: "Damilola Adeyemo",
        position: "Systems Administrator",
      },
      exec5: {
        pic: Shriya,
        name: "Shriya Kaistha",
        position: "Systems Administrator",
      },
      exec6: {
        pic: Amya,
        name: " Amya Singhal",
        position: "Director of Outreach & Internal Affairs",
      },
      exec7: {
        pic: Hanya,
        name: "Hanya Sakr",
        position: "Director of Finance",
      },
      exec8: {
        pic: Jemima,
        name: "Jemima Vijayasenan",
        position: "Director of Publicity",
      },
      exec9: {
        pic: Vanshika,
        name: "Vanshika Bansal",
        position: "Operations Manager",
      },
      exec10: {
        pic: Neelab,
        name: "Neelab Karimi",
        position: "First Year Representative",
      },
    };

    return (
      <StyledCurrExecSectionWrapper>
        <SectionTitleDescription
          title={currentExecStrings.title}
          description={screenWidth <= 425 ? "" : currentExecStrings.term}
        />
        {screenWidth <= 425
          ? this.renderMobileSize(executives)
          : this.renderComputerSize(executives)}
      </StyledCurrExecSectionWrapper>
    );
  }
}

export default CurrentCommittee;
