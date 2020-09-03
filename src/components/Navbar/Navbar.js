import React from 'react';
import {StyledLogo, StyledNavbarWrapper, StyledNavItem} from "./styles";
import strings from "../../res/strings/strings";
import wics_logo from "../../res/images/wics_logo.png"
import {MenuItem} from "semantic-ui-react";

// Navbar component of the website
const Navbar = props => {
  const {changeSelection} = props;
  return (
    <StyledNavbarWrapper
      text
      fixed='top'>
      {/*Logo*/}
      <MenuItem position="left">
        <StyledLogo
          onClick={() => changeSelection(0)}
          src={wics_logo}
          size='tiny'/>
      </MenuItem>
      {/*Nav items*/}
      <MenuItem position="right">
        <StyledNavItem onClick={() => changeSelection(1)}>{strings.navbar.about}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(2)}>{strings.navbar.calendar}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(3)}>{strings.navbar.getInvolved}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(4)}>{strings.navbar.resources}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(5)}>{strings.navbar.sponsors}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(6)}>{strings.navbar.committee}</StyledNavItem>
        <StyledNavItem onClick={() => changeSelection(7)}>{strings.navbar.contactUs}</StyledNavItem>
      </MenuItem>
    </StyledNavbarWrapper>
  )
}

export default Navbar;