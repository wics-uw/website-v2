import React, {Component} from 'react';
// import {Link} from "react-scroll";
import {StyledNavItem} from "./styles";

class NavItem extends Component {
  render() {
    return (
      <StyledNavItem
        // as={Link}
        to={this.props.link}
        spy={true}
        smooth={true}
        duration={500}>
        {this.props.item}
      </StyledNavItem>
    )
  }
}

export default NavItem;