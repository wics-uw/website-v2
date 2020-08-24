import React, {Component} from 'react';
import {CardWrapper, ImageWrapper, TextWrapper, EventDescription, EventTitle, DescriptionWrapper} from './styles';
import {Image} from 'semantic-ui-react';

class FacultyCard extends Component {
    render () {
        return (
            <div>
                <CardWrapper>
                    <ImageWrapper>
                        <Image src={this.props.image}/>
                        <TextWrapper>
                            <EventTitle>
                                {this.props.title}
                            </EventTitle>
                        </TextWrapper>
                    </ImageWrapper>
                    
                        <DescriptionWrapper>
                            <EventDescription>
                                {this.props.descriptionShort}
                            </EventDescription>
                        </DescriptionWrapper>
                      
                   
                </CardWrapper>
            </div>
        )
    }
}

export default FacultyCard;