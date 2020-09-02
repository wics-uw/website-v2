import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import structureStrings from "../../res/structureStrings";
import { Grid } from "semantic-ui-react";
import { StyledTitle, StyledText, StyledColumn } from "./styles";
import { StyledSubSectionWrapper } from "../../res/globalStyles";

class Structure extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={structureStrings.title}
          description={structureStrings.description}
        />
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
      </StyledSubSectionWrapper>
    );
  }
}

export default Structure;
