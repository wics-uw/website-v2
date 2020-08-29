import React, {Component} from 'react';
import pastExecStrings from "../../res/pastExecStrings";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionTitle,
  StyledAccordionTitleText,
  StyledGrid,
  StyledGridColumn,
  StyledImage,
  StyledImageWrapper,
  StyledPastExecsSectionContainer,
  StyledPastExecsTableWrapper,
  StyledTermText,
  StyledTermWrapper
} from "./styles";
import {Image} from "semantic-ui-react";
import past_executives from '../../res/images/past_execs_section.svg';
import PastCommitteeCard from "../../components/PastCommitteeCard/PastCommitteeCard";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import chevron_down from "../../res/images/past_execs_chevron_down.svg";
import chevron_right from "../../res/images/past_execs_chevron_right.svg";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

// Component for past committee section
class PastCommittee extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  };

  renderCard = (name, position) => {
    return (
      <PastCommitteeCard
        name={name}
        position={position}/>
    )
  };

  render() {
    const {active} = this.state;
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={pastExecStrings.title}
          description={pastExecStrings.description}/>
        <StyledImageWrapper>
          <StyledImage src={past_executives}/>
        </StyledImageWrapper>

        <StyledAccordion fluid styled>
          <StyledAccordionTitle
            active={active}
            onClick={this.handleClick}>
            <StyledAccordionTitleText>
              {pastExecStrings.accordionTitle}
            </StyledAccordionTitleText>
            {active
              ? <Image src={chevron_down}/>
              : <Image src={chevron_right}/>
            }
          </StyledAccordionTitle>
          <StyledAccordionContent active={active}>
            <StyledPastExecsTableWrapper>
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
            </StyledPastExecsTableWrapper>
          </StyledAccordionContent>
        </StyledAccordion>
      </StyledSubSectionWrapper>
    )
  }
}

export default PastCommittee;