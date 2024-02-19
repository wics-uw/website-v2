import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import Valerie from "../../res/images/w24execs/valerie.png";
import Star from "../../res/images/w24execs/star.png";
import Caroline from "../../res/images/w24execs/caroline.jpeg";
import Abirami from "../../res/images/w24execs/abirami.png";
import Hanya from "../../res/images/w24execs/hanya.png";
import Helena from "../../res/images/w24execs/helena.png";
import Madeline from "../../res/images/w24execs/madeline.jpeg";
import Madison from "../../res/images/w24execs/madison.jpg";
import Melanie from "../../res/images/w24execs/melanie.jpg";
import Sherry from "../../res/images/w24execs/sherry.jpg";
import Leen from "../../res/images/w24execs/leen.jpg";
import Aarushi from "../../res/images/w24execs/aarushi.png";

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
        pic: Valerie,
        name: "Valerie Fernandes",
        position: "Co-chair",
      },
      exec2: {
        pic: Star,
        name: "Star Xie",
        position: "Co-chair",
      },
      exec3: {
        pic: Aarushi,
        name: "Aarushi Jain",
        position: "Secretary",
      },
      exec4: {
        pic: Helena,
        name: "Helena Xu",
        position: "Systems Administrator",
      },
      exec5: {
        pic: Melanie,
        name: "Melanie Foltak",
        position: "Systems Administrator",
      },
      exec6: {
        pic: Hanya,
        name: "Hanya Sakr",
        position: "Director of Internal Affairs",
      },
      exec7: {
        pic: Leen,
        name: "Leen Kamalmaz",
        position: "Director of Finance",
      },
      exec8: {
        pic: Madison,
        name: "Madison Mussari",
        position: "Co-Director of Publicity",
      },
      exec9: {
        pic: Abirami,
        name: "Abirami Karthikeyan",
        position: "Co-Director of Publicity",
      },
      exec10: {
        pic: Caroline,
        name: "Caroline Huang",
        position: "Director of Outreach",
      },
      exec11: {
        pic: Madeline,
        name: "Madeline Pinto",
        position: "Operations Manager",
      },
      exec12: {
        pic: Sherry,
        name: "Sherry Lin",
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
