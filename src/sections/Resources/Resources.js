import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import resourcesStrings from '../../res/strings/resourcesStrings';
import {Grid, GridColumn} from 'semantic-ui-react';
import {StyledAccordion, StyledAccordionContent, StyledAccordionContentR, StyledAccordionTitle, StyledATitle} from './styles';
import {StyledSectionText, StyledSubSectionWrapper} from '../../res/globalStyles';
import resourceImg from "../../res/images/resource.svg";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import strings from "../../res/strings/strings";
import chevron_down from "../../res/images/past_execs_chevron_down.svg";
import chevron_right from "../../res/images/past_execs_chevron_right.svg";
import ResourcesAccordionContent from "../../components/ResourcesAccordionContent/ResourcesAccordionContent";

//resources component
export default class Resources extends Component {

  //functions to control state
  state = {activeIndex: -1};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex})
  };

  render() {
    //to help control state
    const {activeIndex} = this.state;

    return (
      <StyledSubSectionWrapper>
        {/*the accordion */}
        <Grid columns={2}>
          <GridColumn width={7}>
            <StyledSectionText>{strings.resources}</StyledSectionText>
            <SectionTitleDescription title={resourcesStrings.title} description=''/>
            <StyledAccordion fluid styled>
              {/*first section of accordion */}
              {/*first accordion title */}
              <StyledAccordionTitle
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}>
                <StyledATitle>
                  {resourcesStrings.wicsTitle}
                </StyledATitle>
                {activeIndex === 0 ? <Image src={chevron_down}/> : <Image src={chevron_right}/>}
              </StyledAccordionTitle>

              {/*first accordion content */}
              <StyledAccordionContent active={activeIndex === 0}>
                {Object.entries(resourcesStrings.wicsLinks).map(([number, resource]) => (
                  <ResourcesAccordionContent
                    link={resource.link}
                    linkName={resource.name}/>))}
              </StyledAccordionContent>

              {/*second section of accordion */}
              {/*second accordion title */}
              <StyledAccordionTitle
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}>
                <StyledATitle>
                  {resourcesStrings.conferenceTitle}
                </StyledATitle>
                {activeIndex === 1 ? <Image src={chevron_down}/> : <Image src={chevron_right}/>}
              </StyledAccordionTitle>

              {/*second accordion content */}
              <StyledAccordionContent active={activeIndex === 1}>
                {Object.entries(resourcesStrings.conferenceLinks).map(([number, resource]) => (
                  <ResourcesAccordionContent
                    link={resource.link}
                    linkName={resource.name}/>))}
              </StyledAccordionContent>

              {/*third section of accordion */}
              {/*third accordion title */}
              <StyledAccordionTitle
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}>
                <StyledATitle>
                  {resourcesStrings.additionalTitle}
                </StyledATitle>
                {activeIndex === 2 ? <Image src={chevron_down}/> : <Image src={chevron_right}/>}
              </StyledAccordionTitle>
              {/*third accordion content */}
              <StyledAccordionContent active={activeIndex === 2}>
                {Object.entries(resourcesStrings.additionLinks).map(([number, resource]) => (
                  <ResourcesAccordionContent
                    link={resource.link}
                    linkName={resource.name}/>))}
              </StyledAccordionContent>

              {/*fourth section of accordion */}
              {/*fourth accordion title */}
              <StyledAccordionTitle
                active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}>
                <StyledATitle>
                  {resourcesStrings.womenTitle}
                </StyledATitle>
                {activeIndex === 3 ? <Image src={chevron_down}/> : <Image src={chevron_right}/>}
              </StyledAccordionTitle>

              {/*fourth accordion content */}
              <StyledAccordionContentR active={activeIndex === 3}>
                {Object.entries(resourcesStrings.womenLinks).map(([number, resource]) => (
                  <ResourcesAccordionContent
                    link={resource.link}
                    linkName={resource.name}/>))}
              </StyledAccordionContentR>
            </StyledAccordion>
          </GridColumn>
          <GridColumn width={9}>
            <Image src={resourceImg}/>
          </GridColumn>
        </Grid>
      </StyledSubSectionWrapper>
    )
  }
}
