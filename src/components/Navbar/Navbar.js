import React, {Component} from 'react';
import {StyledLogo, StyledLogoWrapper, StyledNavbarWrapper, StyledNavItemsWrapper} from "./styles";
import NavItem from "./NavItem/NavItem";
import strings from "../../res/strings";
import wics_logo from "../../res/images/wics_logo.png"

// Navbar component of the website
class Navbar extends Component {
  render() {
    return (
      <StyledNavbarWrapper
        text
        fixed='top'>
        {/*Logo*/}
        <StyledLogoWrapper>
          <StyledLogo
            src={wics_logo}
            size='tiny'/>
        </StyledLogoWrapper>
        {/*Nav items*/}
        <StyledNavItemsWrapper>
          <NavItem link={'about'} item={strings.navbar.about}/>
          <NavItem link={'getInvolved'} item={strings.navbar.getInvolved}/>
          <NavItem link={'resources'} item={strings.navbar.resources}/>
          <NavItem link={'committee'} item={strings.navbar.committee}/>
          <NavItem link={'sponsors'} item={strings.navbar.sponsors}/>
          <NavItem link={'contact'} item={strings.navbar.contactUs}/>
        </StyledNavItemsWrapper>
      </StyledNavbarWrapper>
    )
  }
}

export default Navbar;