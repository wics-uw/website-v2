import React, {Component} from 'react';
import {StyledContainer, StyledLogo, StyledMobileMenuGrid, StyledMobileMenuGridRow, StyledNavbarWrapper, StyledNavItem} from "./styles";
import strings from "../../res/strings/strings";
import wics_logo from "../../res/images/wics_logo.png"
import {Image, MenuItem} from "semantic-ui-react";
import menu_hamburger from "../../res/images/hamburger_menu.svg"
import menu_close from "../../res/images/menu_close.svg"
import {Link} from 'react-scroll'

// Navbar component of the website
class Navbar extends Component {
  constructor(props) {
    super(props);
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

  renderComputerSize() {
    return <>
      <Link to={"about"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}>
        <StyledNavItem>{strings.navbar.about}</StyledNavItem>
      </Link>
      <Link to={"calendar"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.calendar}</StyledNavItem>
      </Link>
      <Link to={"get-involved"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.getInvolved}</StyledNavItem>
      </Link>
      <Link to={"resources"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.resources}</StyledNavItem>
      </Link>
      <Link to={"sponsors"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.sponsors}</StyledNavItem>
      </Link>
      <Link to={"committee"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.committee}</StyledNavItem>
      </Link>
      <Link to={"contact-us"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
        <StyledNavItem>{strings.navbar.contactUs}</StyledNavItem>
      </Link>
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
    return <StyledMobileMenuGrid>
      <StyledMobileMenuGridRow>
        <Link to={"about"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.about}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"calendar"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.calendar}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"get-involved"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.getInvolved}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"resources"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.resources}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"sponsors"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.sponsors}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"committee"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.committee}</StyledNavItem>
        </Link>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <Link to={"contact-us"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.contactUs}</StyledNavItem>
        </Link>
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
            <Link to={"landing"}
                  spy={true}
                  smooth={true}
                  duration={500}>
              <StyledLogo
                onClick={() => {
                  this.setState({mobileMenuOpen: false})
                }}
                src={wics_logo}
                size='tiny'/>
            </Link>
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