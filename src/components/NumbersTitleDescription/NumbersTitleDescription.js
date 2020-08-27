import React, {Component} from 'react';
import {StyledDescription, StyledTitle, TextWrapper, StyledLink, StyledUpdate, SourceWrapper} from "./styles";


class NumbersTitleDescription extends Component {
    render () {
        return (
            <div>
                <TextWrapper>
                <StyledTitle>
                {this.props.title}
                </StyledTitle>
                <StyledDescription>
                {this.props.description}
                </StyledDescription>
                </TextWrapper>
                <SourceWrapper>
                <a href={this.props.link} target='_blank' rel="noopener noreferrer"><StyledLink>{this.props.linkName}</StyledLink></a>
                <StyledUpdate>Updated: {this.props.updated}</StyledUpdate>
                </SourceWrapper>
            </div>
        )
    }

}

export default NumbersTitleDescription;