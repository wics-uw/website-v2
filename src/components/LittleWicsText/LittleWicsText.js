import React, {Component} from 'react';
import {StyledTitle, StyledDescription} from './styles';

class LittleWicsText extends Component {
  render() {
    return (
      <div>
        <StyledTitle>{this.props.title}</StyledTitle>
        <StyledDescription>{this.props.description}</StyledDescription>
      </div>
    )
  }
}

export default LittleWicsText;