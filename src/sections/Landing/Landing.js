import React, {Component} from 'react';
import {StyledGridLeftColumn, StyledGridRightColumn, StyledGridWrapper} from "./styles";

class Landing extends Component {
  render() {
    return (
      <StyledGridWrapper columns={2}>
        <StyledGridLeftColumn width={8} verticalAlign='middle'>
          Hello
        </StyledGridLeftColumn>
        <StyledGridRightColumn width={8} verticalAlign='middle'>
          Hello
        </StyledGridRightColumn>
      </StyledGridWrapper>
    )
  }
}

export default Landing;