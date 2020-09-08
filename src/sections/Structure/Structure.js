import React, {Component} from "react";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import structureStrings from "../../res/strings/structureStrings";
import {Grid} from "semantic-ui-react";
import {StyledColumn, StyledText, StyledTitle} from "./styles";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

class Structure extends Component {
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

  renderMobileSize() {
    return <Grid columns={2} padded>
      <StyledColumn mobile={16} left={true}>
        <StyledTitle>{structureStrings.little.title}</StyledTitle>
        <StyledText>{structureStrings.little.description}</StyledText>
      </StyledColumn>
      <StyledColumn mobile={16}>
        <StyledTitle>{structureStrings.big.title}</StyledTitle>
        <StyledText>{structureStrings.big.description}</StyledText>
      </StyledColumn>
    </Grid>;
  }

  renderComputerSize() {
    return <Grid columns={2} padded>
      <StyledColumn left={true}>
        <StyledTitle>{structureStrings.little.title}</StyledTitle>
        <StyledText>{structureStrings.little.description}</StyledText>
      </StyledColumn>
      <StyledColumn>
        <StyledTitle>{structureStrings.big.title}</StyledTitle>
        <StyledText>{structureStrings.big.description}</StyledText>
      </StyledColumn>
    </Grid>;
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <StyledSubSectionWrapper>
        <SectionTitleDescription
          title={structureStrings.title}
          description={structureStrings.description}
        />
        {screenWidth <= 425
          ? this.renderMobileSize()
          : this.renderComputerSize()}
      </StyledSubSectionWrapper>
    );
  }
}

export default Structure;
