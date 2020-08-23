import React, {Component} from 'react';
import {StyledImage} from './styles';

//Sponsor Image Component
class SponsorImg extends Component {
    render () {
        return (
            <StyledImage src={this.props.image}/>
        )
    }
}

export default SponsorImg;