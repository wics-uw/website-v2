import React, {Component} from 'react';
import {StyledCardDescription, StyledNumber, StyledCardWrapper, StyledApprox} from "./styles";

// Number card component
class NumberCard extends Component {
    render() {
      return(
        // Wrapper for the card
        <StyledCardWrapper>
            {/*Number*/}
            <StyledNumber>
            {this.props.number}
            </StyledNumber>
          {/*Number description*/}
          <StyledCardDescription>
            {this.props.description}
            {/*Number approximation*/}
          <StyledApprox>
            {this.props.approx}
          </StyledApprox>
          </StyledCardDescription>
        </StyledCardWrapper>
      )
    }
}

export default NumberCard;

  