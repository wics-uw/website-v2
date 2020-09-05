import React, {Component} from 'react';
import {Image} from "semantic-ui-react";
import {LinkName, LinksWrapper, StyledChain} from "./styles";
import link from "../../res/images/resource_link.svg"

class ResourcesAccordionContent extends Component {
  render() {
    return (
      <LinksWrapper>
        <a href={this.props.link} target='_blank' rel="noopener noreferrer">
          <StyledChain src={link}/>
          <LinkName>{this.props.linkName}</LinkName>
        </a>
      </LinksWrapper>
    )
  }
}

export default ResourcesAccordionContent;