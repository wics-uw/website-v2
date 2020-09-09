import React, {Component} from 'react';
import pastExecStrings from "../../res/strings/pastExecStrings";
import {StyledGrid, StyledGridColumn, StyledImage, StyledImageWrapper, StyledTermText, StyledTermWrapper} from "./styles";
import past_executives from '../../res/images/past_execs_section.svg';
import PastCommitteeCard from "../../components/PastCommitteeCard/PastCommitteeCard";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import CustomAccordion from "../../components/CustomAccordion/CustomAccordion";

// Component for past committee section
class PastCommittee extends Component {

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

  renderCard = (name, position) => {
    return (
      <PastCommitteeCard
        name={name}
        position={position}/>
    )
  };

  renderComputerSize(execs) {
    return <StyledGrid columns={8}>
      {Object.entries(execs).map(([exec, execName]) => (
        <StyledGridColumn>
          {this.renderCard(execName, `${exec === "exec1" ? "Chair" : "Executive"}`)}
        </StyledGridColumn>
      ))}
    </StyledGrid>;
  }

  renderMobileSize(execs) {
    return <StyledGrid columns={2}>
      {Object.entries(execs).map(([exec, execName]) => (
        <StyledGridColumn>
          {this.renderCard(execName, `${exec === "exec1" ? "Chair" : "Executive"}`)}
        </StyledGridColumn>
      ))}
    </StyledGrid>;
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <StyledSubSectionWrapper>
        {screenWidth <= 425
          ? <></>
          : <>
            <SectionTitleDescription
              title={pastExecStrings.title}
              description={pastExecStrings.description}/>
            <StyledImageWrapper>
              <StyledImage src={past_executives}/>
            </StyledImageWrapper>
          </>
        }
        <CustomAccordion title={pastExecStrings.accordionTitle}>
          {Object.entries(pastExecStrings.pastExecs).map(([term, execs]) => (
            <StyledTermWrapper>
              <StyledTermText>
                {term}
              </StyledTermText>
              {screenWidth <= 425
                ? this.renderMobileSize(execs)
                : this.renderComputerSize(execs)}
            </StyledTermWrapper>
          ))}
        </CustomAccordion>
      </StyledSubSectionWrapper>
    )
  }
}

export default PastCommittee;