import React, {Component} from 'react';
import {SponsorTypeLink, StyledGrid, StyledGridColumnL, StyledLink, StyledSponsorLinkTypeWrapper} from "./styles";
import ReactGA from 'react-ga';

class SponsorLinkCard extends Component {
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
    return <StyledGrid columns={6}>
      {Object.entries(this.props.sponsors).map(([number, name]) => (
        <StyledGridColumnL>
          <a href={name.link} target='_blank' rel="noopener noreferrer"  onClick={this.HandleSponsorLinkClick}><StyledLink>{name.name}</StyledLink></a>
        </StyledGridColumnL>
      ))}
    </StyledGrid>;
  }

  renderMobileSize() {
    return <StyledGrid columns={2}>
      {Object.entries(this.props.sponsors).map(([number, name]) => (
        <StyledGridColumnL>
          <a href={name.link} target='_blank' rel="noopener noreferrer"  onClick={this.HandleSponsorLinkClick}><StyledLink>{name.name}</StyledLink></a>
        </StyledGridColumnL>
      ))}
    </StyledGrid>;
  }

  HandleSponsorLinkClick() {
    ReactGA.event ({
      category: 'Sponsors',
      action: 'Clicked Text Sponsor Link'
    })
  }

  render() {
    const {screenWidth} = this.state;
    return (
      <StyledSponsorLinkTypeWrapper>
        {/* Links of silver Sponsors*/}
        <SponsorTypeLink>
          {this.props.type}
        </SponsorTypeLink>
        {screenWidth <= 425
          ? this.renderMobileSize()
          : this.renderComputerSize()}
      </StyledSponsorLinkTypeWrapper>
    );
  }
}

export default SponsorLinkCard;