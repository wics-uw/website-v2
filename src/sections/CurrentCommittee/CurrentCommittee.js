import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import leen from "../../res/images/s23execs/leen.jpeg";
import melanie from "../../res/images/s23execs/melanie.jpg";
import veronica from "../../res/images/w23execs/veronica.jpg";
import priya from "../../res/images/s23execs/priya_saha.jpg";
import shriya from "../../res/images/s23execs/shriya.jpg";
import jemima from "../../res/images/s23execs/jemima.jpg";
import valerie from "../../res/images/s23execs/valerie.jpg";
import madeline from "../../res/images/s23execs/madeline.jpeg";
import padena from "../../res/images/s23execs/padena.JPG";
import iris from "../../res/images/s23execs/iris.jpg";
import madison from "../../res/images/s23execs/madison.jpg";

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
        pic: leen,
        name: "Leen Kamalmaz",
        position: "Co-chair",
      },
      exec2: {
        pic: melanie,
        name: "Melanie Foltak",
        position: "Co-chair",
      },
      exec3: {
        pic: veronica,
        name: "Veronika Sustrova",
        position: "Secretary",
      },
      exec4: {
        pic: iris,
        name: "Iris Chen",
        position: "Director of Internal Affairs",
      },
      exec5: {
        pic: shriya,
        name: "Shriya Kaistha",
        position: "Systems Administrator",
      },
      exec6: {
        pic: priya,
        name: "Priyadarshini Saha",
        position: "Director of Finance",
      },
      exec7: {
        pic: valerie,
        name: "Valerie Fernandes",
        position: "Co-Director of Publicity",
      },
      exec8: {
        pic: madison,
        name: "Madison Mussari",
        position: "Co-Director of Publicity",
      },
      exec9: {
        pic: jemima,
        name: "Jemima Vijayasenan",
        position: "Director of Outreach",
      },
      exec10: {
        pic: padena,
        name: "Padena Rasouli-Baghban",
        position: "Operations Manager",
      },
      exec11: {
        pic: madeline,
        name: "Madeline Pinto",
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
