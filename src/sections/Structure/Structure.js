import React, { Component } from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import structureStrings from "../../res/structureStrings";
import { Grid, Divider } from "semantic-ui-react";
import { StyledTitle, StyledText, StyledSegment } from "./styles";

class Structure extends Component {
  render() {
    return (
      <div>
        <Divider hidden style = {{height: "80px"}} />
        <SectionTitleDescription
          title={structureStrings.title}
          description={structureStrings.description}
        />
        <SectionTitleDescription />
        <Grid stackable columns={2}>
          <Grid.Column style={{paddingRight: "3px", paddingLeft: "0px"}}>
            <StyledSegment>
              <StyledTitle>{structureStrings.little.title}</StyledTitle>
              <StyledText>{structureStrings.little.description}</StyledText>
            </StyledSegment>
          </Grid.Column>
          <Grid.Column style={{paddingRight: "3px", paddingLeft: "0px"}}>
            <StyledSegment>
              <StyledTitle>{structureStrings.big.title}</StyledTitle>
              <StyledText>{structureStrings.big.description}</StyledText>
            </StyledSegment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Structure;
