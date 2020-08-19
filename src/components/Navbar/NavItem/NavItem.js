import React, {Component} from 'react';
import {Link} from "react-scroll";
import {StyledNavItem} from "./styles";

// NavItem component (Navigation items/links)
class NavItem extends Component {
  render() {
    return (
      <StyledNavItem
        as={Link}
        offset={-100}
        to={this.props.link}
        spy={true}
        smooth={true}
        duration={600}>
        {this.props.item}
      </StyledNavItem>
    )
  }
}

export default NavItem;