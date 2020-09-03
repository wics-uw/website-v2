import React, {Component} from 'react';
import {SponsorImg, SponsorTierWrapper, SponsorType} from "./styles";

class SponsorTierCard extends Component {
  render() {
    return (
      <SponsorTierWrapper>
        {/* Platinum Heading */}
        <SponsorType>
          {this.props.type}
        </SponsorType>

        {/* Pictures of Platinum Sponsors*/}
        {Object.entries(this.props.sponsors).map(([key, name]) => (
          name.link === '' ? <SponsorImg src={name.name} alt=''/> :
            (<a href={name.link} target='_blank' rel="noopener noreferrer">
              <SponsorImg src={name.name} alt=''/>
            </a>)
        ))}
      </SponsorTierWrapper>
    );
  }
}

export default SponsorTierCard;