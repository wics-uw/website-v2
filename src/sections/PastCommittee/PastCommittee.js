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

  renderCard = (name, position) => {
    return (
      <PastCommitteeCard
        name={name}
        position={position}/>
    )
  };

  render() {
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={pastExecStrings.title}
          description={pastExecStrings.description}/>
        <StyledImageWrapper>
          <StyledImage src={past_executives}/>
        </StyledImageWrapper>

        <CustomAccordion title={pastExecStrings.accordionTitle}>
          {Object.entries(pastExecStrings.pastExecs).map(([term, execs]) => (
            <StyledTermWrapper>
              <StyledTermText>
                {term}
              </StyledTermText>
              <StyledGrid columns={8}>
                {Object.entries(execs).map(([exec, execName]) => (
                  <StyledGridColumn>
                    {this.renderCard(execName, `${exec === "exec1" ? "Chair" : "Executive"}`)}
                  </StyledGridColumn>
                ))}
              </StyledGrid>
            </StyledTermWrapper>
          ))}
        </CustomAccordion>
      </StyledSubSectionWrapper>
    )
  }
}

export default PastCommittee;