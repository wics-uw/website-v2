import React, {Component} from 'react';
import {SponsorTypeLink, StyledGrid, StyledGridColumnL, StyledLink, StyledSponsorLinkTypeWrapper} from "./styles";

class SponsorLinkCard extends Component {
  render() {
    return (
      <StyledSponsorLinkTypeWrapper>
        {/* Links of silver Sponsors*/}
        <SponsorTypeLink>
          {this.props.type}
        </SponsorTypeLink>
        <StyledGrid columns={6}>
          {Object.entries(this.props.sponsors).map(([number, name]) => (
            <StyledGridColumnL>
              <a href={name.link} target='_blank' rel="noopener noreferrer"><StyledLink>{name.name}</StyledLink></a>
            </StyledGridColumnL>
          ))}
        </StyledGrid>
      </StyledSponsorLinkTypeWrapper>
    );
  }
}

export default SponsorLinkCard;