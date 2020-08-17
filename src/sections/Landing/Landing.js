import React, {Component} from 'react';
import {StyledGridLeftColumn, StyledGridRightColumn, StyledGridWrapper, StyledSchoolName} from "./styles";
import strings from "../../res/strings";

class Landing extends Component {
  render() {
    return (
      <StyledGridWrapper columns={2}>
        <StyledGridLeftColumn width={10} verticalAlign='middle'>
          <StyledSchoolName>
            {strings.landing.uwaterloo}
          </StyledSchoolName>
        </StyledGridLeftColumn>
        <StyledGridRightColumn width={6} verticalAlign='middle'>
          Hello
        </StyledGridRightColumn>
      </StyledGridWrapper>
    )
  }
}

export default Landing;