import React, {Component} from 'react';
import {CardWrapper, ImageWrapper, EventDescription, EventTitle} from './styles';
import {Image} from 'semantic-ui-react';

//component for big wics card
class BigWicsCard extends Component {
  render() {
    return (
      // card wrapper
      <CardWrapper>
        {/* Image */}
        <ImageWrapper>
          <Image src={this.props.image}/>
        </ImageWrapper>
        {/*Title */}
        <EventTitle>
          {this.props.title}
        </EventTitle>
        {/* Description */}
        <EventDescription>
          {this.props.descriptionShort}
        </EventDescription>
      </CardWrapper>

    )
  }
}

export default BigWicsCard;