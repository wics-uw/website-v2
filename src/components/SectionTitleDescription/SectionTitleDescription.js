import React, {Component} from 'react';
import {StyledDescription, StyledTitle} from "./styles";

// Component for each section's title + description
class SectionTitleDescription extends Component {
  render() {
    return (
      <div>
        <StyledTitle>
          {this.props.title}
        </StyledTitle>
        <StyledDescription>
          {this.props.description}
          <a href={this.props.link}>{this.props.linkName}</a>
        </StyledDescription>
      </div>
    )
  }
}

export default SectionTitleDescription;