import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import currentExecStrings from "../../res/strings/currentExecStrings";

// current committee member pictures
import yiyan from "../../res/images/w25execs/yiyan.jpeg";
import yuyeon from "../../res/images/w25execs/yuyeon.jpg";
import ale from "../../res/images/f25execs/Ale.jpg";
import ashley from "../../res/images/f25execs/Ashley.jpg";
import divyanshi from "../../res/images/f25execs/Divyanshi.jpg";
import lucy from "../../res/images/f25execs/Lucy.jpg";
import maitreyee from "../../res/images/f25execs/Maitreyee.jpg";
import sam  from "../../res/images/f25execs/Samantha.jpg";
import sherry from "../../res/images/f25execs/Sherry.jpg";
import shreeya  from "../../res/images/f25execs/Shreeya.jpg";  
import sunny from "../../res/images/f25execs/Sunny.jpg";
import shriya from "../../res/images/w25execs/shriya.jpg";

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
        pic: yiyan,
        name: "Yiyan Huang",
        position: "Co-chair",
      },
      exec2: {
        pic: yuyeon,
        name: "Yuyeon Kim",
        position: "Co-chair",
      },
      exec3: {
        pic: shriya,
        name: "Shriya ",
        position: "Secretary",
      },
      exec4: {
        pic: divyanshi,
        name: "Divyanshi Dave",
        position: "Systems Administrator",
      },
      exec5: {
        pic: shreeya,
        name: "Shreeya Santha",
        position: "Systems Administrator",
      },
      exec6: {
        pic:sam,
        name: "Samantha Mac",
        position: "Director of Outreach &  Internal Affairs",
      },
      /*
      exec11: {
        pic: shriya,
        name: "Shriya Kaistha",
        position: "Director of Internal Affairs",
      },
      */
      exec7: {
        pic: sherry,
        name: "Sherry Lin",
        position: "Director of Finance",
      },
      exec8: {
        pic: lucy,
        name: "Lucy Qi",
        position: "Director of Publicity",
      },
      exec12: {
        pic: ale,
        name: "Sasha Boruk",
        position: "Director of Publicity",
      },
      exec9: {
        pic: ashley,
        name: "Ashley Ge",
        position: "Operations Manager",
      },
      exec10: {
        pic: sunny,
        name: "Sunny Wu",
        position: "First Year Representative",
      },
      exec13: {
        pic: maitreyee,
        name: "Maitreyee Gangal",
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
