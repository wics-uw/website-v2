import React, {Component} from "react";
import {
  StyledCopyright,
  StyledFooterContentContainer,
  StyledFooterWrapper,
  StyledGridColumn, StyledLi,
  StyledLink,
  StyledList,
  StyledSocialContainer,
  StyledText,
  StyledTextGrid,
  StyledTextItalic,
  StyledTitle,
  StyledTitleLink,
} from "./styles";
import {ImageGroup} from "semantic-ui-react";
import footerStrings from "../../res/strings/footerStrings";

import linkedin from "../../res/images/socials/inactive/linkedin-dark.svg";
import facebook from "../../res/images/socials/inactive/facebook-dark.svg";
import slack from "../../res/images/socials/inactive/slack-dark.svg";
import instagram from "../../res/images/socials/inactive/ig-dark.svg";
import email from "../../res/images/socials/inactive/email-dark.svg";
import linkedin_hover from "../../res/images/socials/hover/linkedin-dark.svg";
import facebook_hover from "../../res/images/socials/hover/facebook-dark.svg";
import slack_hover from "../../res/images/socials/hover/slack-dark.svg";
import instagram_hover from "../../res/images/socials/hover/ig-dark.svg";
import email_hover from "../../res/images/socials/hover/email-dark.svg";
import strings from "../../res/strings/strings";
import {StyledSocial} from "../../res/globalStyles";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }

  renderAddress() {
    return <>
      <StyledTitle>{footerStrings.title.addr}</StyledTitle>
      <StyledList>
        <li>
          <StyledText>{footerStrings.description.a1}</StyledText>
        </li>
        <li>
          <StyledText>{footerStrings.description.a2}</StyledText>
        </li>
        <li>
          <StyledText>{footerStrings.description.a3}</StyledText>
        </li>
      </StyledList>
      <StyledList>
        <li>
          <StyledTextItalic>
            {footerStrings.description.a4}
          </StyledTextItalic>
        </li>
        <li>
          <StyledTextItalic>
            {footerStrings.description.a5}
          </StyledTextItalic>
        </li>
        <li>
          <StyledTextItalic>
            {footerStrings.description.a6}
          </StyledTextItalic>
        </li>
        <li>
          <StyledTextItalic>
            {footerStrings.description.a7}
          </StyledTextItalic>
        </li>
      </StyledList>
    </>;
  }

  renderLandAcknowledgement() {
    return <>
      <StyledTitle>
        <StyledTitleLink href={footerStrings.links.pol} target='_blank'>
          {footerStrings.title.la}
        </StyledTitleLink>
      </StyledTitle>
      <StyledText>{footerStrings.description.la}</StyledText>
    </>;
  }

  renderSocials() {
    return <StyledSocialContainer>
      <ImageGroup>
        <a href={strings.social.linkedin} target="_blank" rel="noopener noreferrer">
          <StyledSocial
            src={linkedin}
            onMouseOver={e => (e.currentTarget.src = linkedin_hover)}
            onMouseOut={e => (e.currentTarget.src = linkedin)}/>
        </a>
        <a href={strings.social.facebook} target="_blank" rel="noopener noreferrer">
          <StyledSocial
            src={facebook}
            onMouseOver={e => (e.currentTarget.src = facebook_hover)}
            onMouseOut={e => (e.currentTarget.src = facebook)}/>
        </a>
        <a href={strings.social.instagram} target="_blank" rel="noopener noreferrer">
          <StyledSocial
            src={instagram}
            onMouseOver={e => (e.currentTarget.src = instagram_hover)}
            onMouseOut={e => (e.currentTarget.src = instagram)}/>
        </a>
        <a href={strings.social.slack} target="_blank" rel="noopener noreferrer">
          <StyledSocial
            src={slack}
            onMouseOver={e => (e.currentTarget.src = slack_hover)}
            onMouseOut={e => (e.currentTarget.src = slack)}/>
        </a>
        <a href={strings.social.emailLink} target="_blank" rel="noopener noreferrer">
          <StyledSocial
            src={email}
            onMouseOver={e => (e.currentTarget.src = email_hover)}
            onMouseOut={e => (e.currentTarget.src = email)}
          />
        </a>
      </ImageGroup>
    </StyledSocialContainer>;
  }

  renderRelevantLinks() {
    return <>
      <StyledTitle>{footerStrings.title.lk}</StyledTitle>
      <StyledList>
        <li>
          <StyledLink href={footerStrings.links.lk1} target='_blank'>
            {footerStrings.description.lk1}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={footerStrings.links.lk2} target='_blank'>
            {footerStrings.description.lk2}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={footerStrings.links.lk3} target='_blank'>
            {footerStrings.description.lk3}
          </StyledLink>
        </li>
      </StyledList>
    </>;
  }

  renderPolicies() {
    return <>
      <StyledTitle>
        <StyledTitleLink href={footerStrings.links.pol} target='_blank'>
          {footerStrings.title.pol}
        </StyledTitleLink>
      </StyledTitle>
      <StyledList>
        <li>
          <StyledLink href={footerStrings.links.p1} target='_blank'>
            {footerStrings.description.p1}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={footerStrings.links.p2} target='_blank'>
            {footerStrings.description.p2}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={footerStrings.links.p3} target='_blank'>
            {footerStrings.description.p3}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={footerStrings.links.p4} target='_blank'>
            {footerStrings.description.p4}
          </StyledLink>
        </li>
      </StyledList>
    </>;
  }

  renderPoliciesAndLinksMobile() {
    return <>
      <StyledTitle>
        <StyledTitleLink href={footerStrings.links.pol} target='_blank'>
          {footerStrings.title.polAndLinks}
        </StyledTitleLink>
      </StyledTitle>
      <StyledList>
        <StyledLi>
          <StyledLink href={footerStrings.links.p1} target='_blank'>
            {footerStrings.description.p1}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.p2} target='_blank'>
            {footerStrings.description.p2}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.p3} target='_blank'>
            {footerStrings.description.p3}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.p4} target='_blank'>
            {footerStrings.description.p4}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.lk1} target='_blank'>
            {footerStrings.description.lk1}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.lk2} target='_blank'>
            {footerStrings.description.lk2}
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={footerStrings.links.lk3} target='_blank'>
            {footerStrings.description.lk3}
          </StyledLink>
        </StyledLi>
      </StyledList>
    </>;
  }

  renderMobile() {
    return (
      <StyledTextGrid>
        {/*Address*/}
        <StyledGridColumn width={16}>
          {this.renderAddress()}
        </StyledGridColumn>

        {/*Our Policies & Relevant links*/}
        <StyledGridColumn width={16}>
          {this.renderPoliciesAndLinksMobile()}
        </StyledGridColumn>

        {/*Land Acknowledgement*/}
        <StyledGridColumn width={16}>
          {this.renderLandAcknowledgement()}
        </StyledGridColumn>
      </StyledTextGrid>
    )
  }

  renderComputer() {
    return (
      <StyledTextGrid>
        {/*Address*/}
        <StyledGridColumn width={4}>
          {this.renderAddress()}
        </StyledGridColumn>

        {/*Land Acknowledgement*/}
        <StyledGridColumn width={6}>
          {this.renderLandAcknowledgement()}
        </StyledGridColumn>

        {/*Our Policies*/}
        <StyledGridColumn width={3}>
          {this.renderPolicies()}
        </StyledGridColumn>

        {/*Relevant links*/}
        <StyledGridColumn width={3}>
          {this.renderRelevantLinks()}
        </StyledGridColumn>
      </StyledTextGrid>
    )
  }

  render() {
    const {screenWidth} = this.state;

    return (
      <StyledFooterWrapper>
        <StyledFooterContentContainer>
          {screenWidth <= 425
            ? this.renderMobile()
            : this.renderComputer()}

          {this.renderSocials()}

          <StyledCopyright>
            {screenWidth <= 425
              ? <>&copy; {new Date().getFullYear()} {footerStrings.copyright1} <br/> {footerStrings.copyright2}</>
              : <>&copy; {new Date().getFullYear()} {footerStrings.copyright1} {footerStrings.copyright2}</>
            }

          </StyledCopyright>
        </StyledFooterContentContainer>
      </StyledFooterWrapper>
    );
  }
}

export default Footer;
