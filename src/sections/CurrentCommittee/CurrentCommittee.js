import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import Claudia from "../../res/images/f23execs/Claudia.jpg";
import Maryam from "../../res/images/f23execs/Maryam.jpg";
import Molly from "../../res/images/f23execs/Molly.jpg";
import Layne from "../../res/images/f23execs/Layne.jpg";
import Amanda from "../../res/images/f23execs/Amanda.jpg";
import Karneet from "../../res/images/f23execs/Karneet.jpg";
import Shriya from "../../res/images/f23execs/Shriya.jpg";
import Jemima from "../../res/images/f23execs/Jemima.jpg";
import Dora from "../../res/images/f23execs/Dora.jpg";
import Caroline from "../../res/images/f23execs/Caroline.jpg";
import Bodhana from "../../res/images/f23execs/Bodhana.jpg";
import Aarushi from "../../res/images/f23execs/Aarushi.jpg";

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
        pic: Claudia,
        name: "Claudia McComb",
        position: "Co-chair",
      },
      exec2: {
        pic: Maryam,
        name: "Maryam Afshar",
        position: "Co-chair",
      },
      exec3: {
        pic: Molly,
        name: "Molly Xu",
        position: "Secretary",
      },
      exec4: {
        pic: Layne,
        name: "Layne Lim",
        position: "Systems Administrator",
      },
      exec5: {
        pic: Amanda,
        name: "Amanda Bishop",
        position: "Director of Internal Affairs",
      },
      exec6: {
        pic: Karneet,
        name: "Karneet Kaur",
        position: "Director of Finance",
      },
      exec7: {
        pic: Shriya,
        name: "Shriya Kaistha",
        position: "Co-Director of Publicity",
      },
      exec8: {
        pic: Aarushi,
        name: "Aarushi Jain",
        position: "Co-Director of Publicity",
      },
      exec9: {
        pic: Jemima,
        name: "Jemima Vijayasenan",
        position: "Director of Outreach",
      },
      exec10: {
        pic: Dora,
        name: "Dora Su",
        position: "Operations Manager",
      },
      exec11: {
        pic: Caroline,
        name: "Caroline Huang",
        position: "First Year Representative",
      },
      exec12: {
        pic: Bodhana,
        name: "Bodhana Sivagurunathan",
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
