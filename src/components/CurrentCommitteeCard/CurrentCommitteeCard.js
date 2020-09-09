import React, {Component} from "react";
import {StyledExecCardWrapper, StyledExecImage, StyledExecName, StyledExecPosition} from "./styles";

// Component card for current committee
class currentCommitteeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <StyledExecCardWrapper>
        {/*Executive's image*/}
        {screenWidth <= 425
          ? <></>
          : <StyledExecImage
            circular
            src={this.props.picture}/>}
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