import React, {Component} from "react";
import {StyledPastExecName, StyledPastExecPositionTerm} from "./styles";

// Component card for past committee
class PastCommitteeCard extends Component {
  render() {
    return (
      <div>
        <StyledPastExecName>
          {this.props.name}
        </StyledPastExecName>
        <StyledPastExecPositionTerm>
          {this.props.position} | {this.props.term}
        </StyledPastExecPositionTerm>
      </div>

    )
  }
}

export default PastCommitteeCard;