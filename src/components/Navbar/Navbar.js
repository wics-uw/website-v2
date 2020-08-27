import React, {Component} from 'react';
import {StyledLogo, StyledNavbarWrapper} from "./styles";
import NavItem from "./NavItem/NavItem";
import strings from "../../res/strings";
import wics_logo from "../../res/images/wics_logo.png"
import {MenuItem} from "semantic-ui-react";

// Navbar component of the website
class Navbar extends Component {
  render() {
    return (
      <StyledNavbarWrapper
        text
        fixed='top'>
        {/*Logo*/}
        <MenuItem position="left">
          <StyledLogo
            src={wics_logo}
            size='tiny'/>
        </MenuItem>
        {/*Nav items*/}
        <MenuItem position="right">
          <NavItem link={'about'} item={strings.navbar.about}/>
          <NavItem link={'calendar'} item={strings.navbar.calendar}/>
          <NavItem link={'getInvolved'} item={strings.navbar.getInvolved}/>
          <NavItem link={'resources'} item={strings.navbar.resources}/>
          <NavItem link={'committee'} item={strings.navbar.committee}/>
          <NavItem link={'sponsors'} item={strings.navbar.sponsors}/>
          <NavItem link={'contact'} item={strings.navbar.contactUs}/>
        </MenuItem>
      </StyledNavbarWrapper>
    )
  }
}

export default Navbar;