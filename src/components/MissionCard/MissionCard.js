import React, {Component} from 'react';
import {StyledCardDescription, StyledCardImage, StyledCardTitle, StyledCardWrapper} from "./styles";

// Mission card component
class MissionCard extends Component {
  render() {
    return (
      // Wrapper for the card
      <StyledCardWrapper>
        {/*Card image*/}
        <StyledCardImage src={this.props.image}/>
        {/*Card title*/}
        <StyledCardTitle>
          {this.props.title}
        </StyledCardTitle>
        {/*Card description*/}
        <StyledCardDescription>
          {this.props.description}
        </StyledCardDescription>
      </StyledCardWrapper>
    )
  }
}

export default MissionCard;