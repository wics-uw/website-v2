import React, {Component} from 'react';
import {StyledDescription, StyledTitle, DescriptionWrapper, StyledLink, StyledUpdate} from "./styles";

// NumberTitleDescription Component
class NumbersTitleDescription extends Component {
  render() {
    return (
      <div>
        <StyledTitle>
          {this.props.title}
        </StyledTitle>
        <DescriptionWrapper>
          <StyledDescription>
            {this.props.description}
          </StyledDescription>
          <div>
            <a href={this.props.link} target='_blank' rel="noopener noreferrer"><StyledLink>{this.props.linkName}</StyledLink></a>
            <StyledUpdate>Updated: {this.props.updated}</StyledUpdate>
          </div>
        </DescriptionWrapper>
      </div>
    )
  }
}

export default NumbersTitleDescription;