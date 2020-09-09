import React, {Component} from 'react';
import {StyledContainer, StyledLogo, StyledMobileMenuGrid, StyledMobileMenuGridRow, StyledNavbarWrapper, StyledNavItem} from "./styles";
import strings from "../../res/strings/strings";
import wics_logo from "../../res/images/wics_logo.png"
import {Image, MenuItem} from "semantic-ui-react";
import menu_hamburger from "../../res/images/hamburger_menu.svg"
import menu_close from "../../res/images/menu_close.svg"

// Navbar component of the website
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = {changeSelection: props};
    this.state = {
      screenWidth: null,
      mobileMenuOpen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }

  renderComputerSize(changeSelection) {
    return <>
      <StyledNavItem onClick={() => changeSelection(1)}>{strings.navbar.about}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(2)}>{strings.navbar.calendar}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(3)}>{strings.navbar.getInvolved}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(4)}>{strings.navbar.resources}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(5)}>{strings.navbar.sponsors}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(6)}>{strings.navbar.committee}</StyledNavItem>
      <StyledNavItem onClick={() => changeSelection(7)}>{strings.navbar.contactUs}</StyledNavItem>
    </>;
  }

  renderMobileSize() {
    const {mobileMenuOpen} = this.state;
    return <>
      <Image onClick={this.handleMobileMenu}
             src={mobileMenuOpen ? menu_close : menu_hamburger}/>
    </>;
  }

  renderMobileMenuOpen() {
    const {changeSelection} = this.props;
    return <StyledMobileMenuGrid>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(1);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.about}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(2);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.calendar}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(3);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.getInvolved}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(4);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.resources}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(5);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.sponsors}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(6);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.committee}</StyledNavItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <StyledNavItem onClick={() => {
          changeSelection(7);
          this.setState({mobileMenuOpen: false})
        }}>{strings.navbar.contactUs}</StyledNavItem>
      </StyledMobileMenuGridRow>
    </StyledMobileMenuGrid>;
  }

  render() {
    const {changeSelection} = this.props;
    const {screenWidth, mobileMenuOpen} = this.state;
    return (
      <StyledNavbarWrapper
        open={mobileMenuOpen}
        text
        fixed='top'>
        {/*Logo*/}
        <StyledContainer open={mobileMenuOpen}>
          <MenuItem position="left">
            <StyledLogo
              onClick={() => {
                changeSelection(0);
                this.setState({mobileMenuOpen: false})
              }}
              src={wics_logo}
              size='tiny'/>
          </MenuItem>
          {/*Nav items*/}
          <MenuItem position="right">
            {screenWidth <= 425
              ? this.renderMobileSize(changeSelection)
              : this.renderComputerSize(changeSelection)}
          </MenuItem>
        </StyledContainer>
        {mobileMenuOpen
          ? this.renderMobileMenuOpen()
          : <></>}
      </StyledNavbarWrapper>
    )
  }
}

export default Navbar;