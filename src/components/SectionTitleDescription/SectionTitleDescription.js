import React, {Component} from 'react';
import {StyledDescription, StyledTitle, StyledWrapper} from "./styles";

// Component for each section's title + description
class SectionTitleDescription extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>
          {this.props.title}
        </StyledTitle>
        <StyledDescription>
          {this.props.description}
        </StyledDescription>
      </StyledWrapper>
    )
  }
}

export default SectionTitleDescription;