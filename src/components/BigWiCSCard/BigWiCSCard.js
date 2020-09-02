import React, {Component} from 'react';
import {CardWrapper, ImageWrapper, EventDescription, EventTitle} from './styles';
import {Image} from 'semantic-ui-react';

class FacultyCard extends Component {
    render () {
        return (
            
                <CardWrapper>
                    <ImageWrapper>
                        <Image src={this.props.image}/>
                        </ImageWrapper>   

                            <EventTitle>
                                {this.props.title}
                            </EventTitle>
                        
                    
                    
                        
                            <EventDescription>
                                {this.props.descriptionShort}
                            </EventDescription>
                        
                      
                   
                </CardWrapper>
            
        )
    }
}

export default FacultyCard;