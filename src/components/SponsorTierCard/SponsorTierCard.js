import React, {Component} from 'react';
import {SponsorImg, SponsorTierWrapper, SponsorType, StyledGrid, StyledGridRow} from "./styles";
import ReactGA from 'react-ga';


class SponsorTierCard extends Component {
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

  HandleSponsorLinkClick() {
    ReactGA.event ({
      category: 'Sponsors',
      action: 'Clicked Photo Sponsor Link'
    })
  }

  renderComputerSize() {
    return <>
      {Object.entries(this.props.sponsors).map(([key, sponsor]) => (
        sponsor.link === ''
          ? <SponsorImg src={sponsor.logo} alt='' onClick={this.HandleSponsorLinkClick}/>
          : (<a href={sponsor.link} target='_blank' rel="noopener noreferrer">
            <SponsorImg src={sponsor.logo} alt=''onClick={this.HandleSponsorLinkClick}/>
          </a>)
      ))}
    </>;
  }

  renderMobileSize() {
    return <StyledGrid>
      {Object.entries(this.props.sponsors).map(([key, sponsor]) => (
        <StyledGridRow>
          {sponsor.link === ''
            ? <SponsorImg src={sponsor.logo} alt=''/>
            : (<a href={sponsor.link} target='_blank' rel="noopener noreferrer">
              <SponsorImg src={sponsor.logo} alt=''/>
            </a>)
          }
        </StyledGridRow>
      ))}
    </StyledGrid>;
  }

  render() {
    const {screenWidth} = this.state;

    return (
      <SponsorTierWrapper>
        {/* Platinum Heading */}
        <SponsorType>
          {this.props.type}
        </SponsorType>

        {screenWidth <= 425
          ? this.renderMobileSize()
          : this.renderComputerSize()}
      </SponsorTierWrapper>
    );
  }
}

export default SponsorTierCard;