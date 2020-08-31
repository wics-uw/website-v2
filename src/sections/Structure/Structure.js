import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import structureStrings from "../../res/structureStrings";
import { Grid, Divider } from "semantic-ui-react";
import { StyledTitle, StyledText, StyledColumn } from "./styles";

class Structure extends Component {
  render() {
    return (
      <div>
        <SectionTitleDescription
          title={structureStrings.title}
          description={structureStrings.description}
        />
        <SectionTitleDescription />
        <Grid columns={2} padded>
          <StyledColumn style={{ marginRight: "6px" }}>
            <StyledTitle>{structureStrings.little.title}</StyledTitle>
            <StyledText>{structureStrings.little.description}</StyledText>
          </StyledColumn>
          <StyledColumn>
            <StyledTitle>{structureStrings.big.title}</StyledTitle>
            <StyledText>{structureStrings.big.description}</StyledText>
          </StyledColumn>
        </Grid>
      </div>
    );
  }
}

export default Structure;
