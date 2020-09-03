import React, {Component} from 'react';
import {Image} from "semantic-ui-react";
import chevron_down from "../../res/images/past_execs_chevron_down.svg";
import chevron_right from "../../res/images/past_execs_chevron_right.svg";
import {StyledAccordion, StyledAccordionContent, StyledAccordionTitle, StyledAccordionTitleText, StyledContentTableWrapper} from "./styles";

class CustomAccordion extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  };

  render() {
    const {active} = this.state;
    return (
      <StyledAccordion fluid styled>
        <StyledAccordionTitle
          active={active}
          onClick={this.handleClick}>
          <StyledAccordionTitleText>
            {this.props.title}
          </StyledAccordionTitleText>
          {active
            ? <Image src={chevron_down}/>
            : <Image src={chevron_right}/>
          }
        </StyledAccordionTitle>
        <StyledAccordionContent active={active}>
          <StyledContentTableWrapper>
            {this.props.children}
          </StyledContentTableWrapper>
        </StyledAccordionContent>
      </StyledAccordion>
    );
  }
}

export default CustomAccordion;