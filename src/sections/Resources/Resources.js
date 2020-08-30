import React, { Component } from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import resourcesStrings from '../../res/resourcesStrings';
import {Accordion, AccordionTitle, Icon, Menu} from 'semantic-ui-react';
import {StyledATitle, AccordionWrapper, StyledIcon, LinksWrapper, LinkName, StyledAccordion, StyledAccordionContent, StyledAccordionContentR, Clear} from './styles';
import resourceImg from '../../res/images/resource.svg';

export default class Resources extends Component {
    state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
    render() {
        const { activeIndex } = this.state

        return (
            <div>
                
                <SectionTitleDescription title={resourcesStrings.title} description= ''/>
                
                
                <AccordionWrapper>
                <StyledAccordion fluid styled>
                    <Menu.Item>
                        <AccordionTitle active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}>
                                <div>
                        <StyledATitle>
                            {resourcesStrings.campusTitle}
                        </StyledATitle>
                        {activeIndex === 0? <StyledIcon name='chevron down'/> : <StyledIcon name='chevron right'/> }
                        </div></AccordionTitle>
                        <StyledAccordionContent active={activeIndex === 0}>
                        {Object.entries(resourcesStrings.campusLinks).map(([number, resource]) => (
                            <LinksWrapper>
                                <a href={resource.link} target='_blank'>
                                <Icon name='chain' color='black'/>
                                <LinkName>{resource.name}</LinkName>
                                </a>
                            </LinksWrapper>
                        ))
                        }
                        </StyledAccordionContent>
                    </Menu.Item>
                    <Menu.Item>
                        
                        <AccordionTitle active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}>
                                <div>
                        <StyledATitle>
                            {resourcesStrings.finaceTitle}
                        </StyledATitle>
                        {activeIndex === 1? <StyledIcon name='chevron down'/> : <StyledIcon name='chevron right'/> }
                        </div></AccordionTitle>
                        <StyledAccordionContent active={activeIndex === 1}>
                        {Object.entries(resourcesStrings.financeLinks).map(([number, resource]) => (
                            <LinksWrapper>
                                <a href={resource.link} target='_blank'>
                                <Icon name='chain' color='black'/>
                                <LinkName>{resource.name}</LinkName>
                                </a>
                            </LinksWrapper>
                        ))
                        }
                        </StyledAccordionContent>
                    </Menu.Item>
                    <Menu.Item>
                        <AccordionTitle active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}>
                        <StyledATitle>
                            {resourcesStrings.additionalTitle}
                        </StyledATitle>
                        {activeIndex === 2? <StyledIcon name='chevron down'/> : <StyledIcon name='chevron right'/> }
                        </AccordionTitle>
                        <StyledAccordionContentR active={activeIndex === 2}>
                        {Object.entries(resourcesStrings.additionLinks).map(([number, resource]) => (
                            <LinksWrapper>
                                <a href={resource.link} target='_blank'>
                                <Icon name='chain' color='black'/>
                                <LinkName>{resource.name}</LinkName>
                                </a>
                            </LinksWrapper>
                        ))
                        }
                        </StyledAccordionContentR>
                    </Menu.Item>
                    
                </StyledAccordion>
                </AccordionWrapper>

                <Clear></Clear>
            </div>
        )
    }
}
