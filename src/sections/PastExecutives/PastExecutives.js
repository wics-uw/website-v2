import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import alumni from "../../res/images/Alumni.png";
import { StyledCardImage, PastExecWrapper } from "./styles";

class PastExecutives extends Component {
  render() {
    return (
      <PastExecWrapper>
        <StyledCardImage src={alumni} />;
      </PastExecWrapper>
    );
  }
}
export default PastExecutives;
