import React, {Component} from 'react';
import {StyledAccordionContent, StyledAccordionTitle, StyledATitle} from "./styles";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import chevron_down from "../../res/images/past_execs_chevron_down.svg";
import chevron_right from "../../res/images/past_execs_chevron_right.svg";
import ResourcesAccordionContent from "../ResourcesAccordionContent/ResourcesAccordionContent";

class ResourcesAccordion extends Component {
  state = {activeIndex: -1};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({activeIndex: newIndex})
  };

  render() {
    const {activeIndex} = this.state;
    return (
      <div>
        <StyledAccordionTitle
          first={this.props.first}
          active={activeIndex === this.props.index}
          index={this.props.index}
          onClick={this.handleClick}>
          <StyledATitle>
            {this.props.title}
          </StyledATitle>
          {activeIndex === this.props.index ? <Image src={chevron_down}/> : <Image src={chevron_right}/>}
        </StyledAccordionTitle>

        <StyledAccordionContent active={activeIndex === this.props.index} last={this.props.last}>
          {Object.entries(this.props.content).map(([number, resource]) => (
            <ResourcesAccordionContent
              link={resource.link}
              linkName={resource.name}/>))}
        </StyledAccordionContent>
      </div>
    );
  }
}

export default ResourcesAccordion;