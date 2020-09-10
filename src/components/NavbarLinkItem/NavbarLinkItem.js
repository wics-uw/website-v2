import React, {Component} from 'react';
import {Link} from 'react-scroll'

class NavbarLinkItem extends Component {
  render() {
    return (
      <Link
        to={this.props.to}
        spy={true}
        smooth={true}
        duration={1000}
        offset={this.props.offset}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavbarLinkItem;