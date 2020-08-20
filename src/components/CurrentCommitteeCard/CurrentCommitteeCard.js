import React, {Component} from "react";
import {StyledExecCardWrapper, StyledExecImage, StyledExecName, StyledExecPosition} from "./styles";

// Component card for current committee
class currentCommitteeCard extends Component {
  render() {
    return (
      <StyledExecCardWrapper>
        {/*Executive's image*/}
        <StyledExecImage
          circular
          src={this.props.picture}/>
        {/*Executive's name*/}
        <StyledExecName>
          {this.props.name}
        </StyledExecName>
        {/*Executive's position*/}
        <StyledExecPosition>
          {this.props.position}
        </StyledExecPosition>
      </StyledExecCardWrapper>
    )
  }
}

export default currentCommitteeCard;