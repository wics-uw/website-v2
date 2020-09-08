import React, {Component} from 'react';
import {StyledDescription, StyledTitle, DescriptionWrapper, StyledLink, StyledUpdate} from "./styles";

// NumberTitleDescription Component
class NumbersTitleDescription extends Component {
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

  renderComputerSize() {
    return <>
      <StyledTitle>
        {this.props.title}
      </StyledTitle>
      <DescriptionWrapper>
        <StyledDescription>
          {this.props.description}
        </StyledDescription>
        <div>
          <a href={this.props.link} target='_blank' rel="noopener noreferrer"><StyledLink>{this.props.linkName}</StyledLink></a>
          <StyledUpdate>Updated: {this.props.updated}</StyledUpdate>
        </div>
      </DescriptionWrapper>
    </>;
  }

  renderMobileSize() {
    return <>
      <StyledTitle>
        {this.props.title}
      </StyledTitle>
      <DescriptionWrapper>
        <StyledDescription>
          {this.props.description}
        </StyledDescription>
      </DescriptionWrapper>
    </>;
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <div>
        {screenWidth <= 425
          ? this.renderMobileSize()
          : this.renderComputerSize()}
      </div>
    )
  }
}

export default NumbersTitleDescription;