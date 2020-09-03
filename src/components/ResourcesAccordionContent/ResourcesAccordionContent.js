import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import {LinkName, LinksWrapper} from "./styles";

class ResourcesAccordionContent extends Component {
  render() {
    return (
      <LinksWrapper>
        <a href={this.props.link} target='_blank' rel="noopener noreferrer">
          <Icon name='chain' color='black'/>
          <LinkName>{this.props.linkName}</LinkName>
        </a>
      </LinksWrapper>
    )
  }
}

export default ResourcesAccordionContent;