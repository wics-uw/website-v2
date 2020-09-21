import React, {Component} from 'react';
import {StyledContainer, StyledLogo, StyledMobileMenuGrid, StyledMobileMenuGridRow, StyledNavbarWrapper, StyledNavItem} from "./styles";
import strings from "../../res/strings/strings";
import wics_logo from "../../res/images/wics_logo.png"
import {Image, MenuItem} from "semantic-ui-react";
import menu_hamburger from "../../res/images/hamburger_menu.svg"
import menu_close from "../../res/images/menu_close.svg"
import NavbarLinkItem from "../../components/NavbarLinkItem/NavbarLinkItem";
import ReactGA from "react-ga";

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

  AboutClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked About'
    })
  }
  CalendarClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Calendar'
    })
  }
  GetInvolvedClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Get Involved'
    })
  }
  ResourcesClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Resources'
    })
  }
  SponsorsClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Sponsors'
    })
  }
  CommitteeClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Committee'
    })
  }
  ContactUsClick = () => {
    ReactGA.event ({
      category: 'NavBar',
      action: 'Clicked Contact Us'
    })
  }

  renderComputerSize() {
    return <>
      <NavbarLinkItem to={"about"} offset={-50}>
        <StyledNavItem onClick={this.AboutClick}>{strings.navbar.about}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"calendar"} offset={-100}>
        <StyledNavItem onClick={this.CalendarClick}>{strings.navbar.calendar}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"get-involved"} offset={-100}>
        <StyledNavItem onClick={this.GetInvolvedClick}>{strings.navbar.getInvolved}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"resources"} offset={-100}>
        <StyledNavItem onClick={this.ResourcesClick}>{strings.navbar.resources}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"sponsors"} offset={-100}>
        <StyledNavItem onClick={this.SponsorsClick}>{strings.navbar.sponsors}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"committee"} offset={-100}>
        <StyledNavItem onClick={this.CommitteeClick}>{strings.navbar.committee}</StyledNavItem>
      </NavbarLinkItem>
      <NavbarLinkItem to={"contact-us"} offset={-100}>
        <StyledNavItem onClick={this.ContactUsClick}>{strings.navbar.contactUs}</StyledNavItem>
      </NavbarLinkItem>
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
        <NavbarLinkItem to={"about"} offset={-50}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.about}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"calendar"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.calendar}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"get-involved"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.getInvolved}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"resources"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.resources}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"sponsors"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.sponsors}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"committee"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.committee}</StyledNavItem>
        </NavbarLinkItem>
      </StyledMobileMenuGridRow>
      <StyledMobileMenuGridRow>
        <NavbarLinkItem to={"contact-us"} offset={-90}>
          <StyledNavItem onClick={() => {
            this.setState({mobileMenuOpen: false})
          }}>{strings.navbar.contactUs}</StyledNavItem>
        </NavbarLinkItem>
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
            <NavbarLinkItem to={"landing"} offset={-32}>
              <StyledLogo
                onClick={() => {
                  this.setState({mobileMenuOpen: false})
                }}
                src={wics_logo}
                size='tiny'/>
            </NavbarLinkItem>
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