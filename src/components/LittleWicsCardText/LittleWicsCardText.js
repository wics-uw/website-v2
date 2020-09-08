import React, {Component} from 'react';
import {StyledTitle, StyledDescription} from './styles';

class LittleWicsCardText extends Component {
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
      <div>
        <StyledTitle>{this.props.title}</StyledTitle>
        {screenWidth <= 425
          ? <StyledDescription>{this.props.mobileDescription}</StyledDescription>
          : <StyledDescription>{this.props.description}</StyledDescription>
        }
      </div>
    )
  }
}

export default LittleWicsCardText;