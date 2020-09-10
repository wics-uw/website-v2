import React, {Component} from "react";
import contactStrings from "../../res/strings/contactStrings";
import {Grid, Image, ImageGroup} from "semantic-ui-react";
import {
  StyledFaqLink,
  StyledReachOutLink,
  StyledSubContactSectionWrapper,
  StyledSubContactSectionWrapper2,
  StyledText,
  StyledTitle,
  StyledTitle2,
} from "./styles";
import illustration from "../../res/images/contact_us_section.svg";

import linkedin from "../../res/images/socials/inactive/linkedin-dark.svg";
import facebook from "../../res/images/socials/inactive/facebook-dark.svg";
import slack from "../../res/images/socials/inactive/slack-dark.svg";
import instagram from "../../res/images/socials/inactive/ig-dark.svg";
import {StyledSectionText, StyledSocialLink, StyledSubSectionWrapper} from "../../res/globalStyles";
import strings from "../../res/strings/strings";
import linkedin_hover from "../../res/images/socials/hover/linkedin-dark.svg";
import facebook_hover from "../../res/images/socials/hover/facebook-dark.svg";
import slack_hover from "../../res/images/socials/hover/slack-dark.svg";
import instagram_hover from "../../res/images/socials/hover/ig-dark.svg";

class Contact extends Component {
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

  renderContent() {
    return <>
      <StyledSectionText>{strings.contactUs}</StyledSectionText>
      <StyledSubContactSectionWrapper>
        <StyledTitle>{contactStrings.faq.title}</StyledTitle>
        <StyledText>
          {contactStrings.faq.d1}
          <StyledFaqLink href={contactStrings.faq.faqlink} target='_blank'>
            {contactStrings.faq.faqtext}
          </StyledFaqLink>
          {contactStrings.faq.d2}
          <StyledFaqLink href={contactStrings.faq.policylink} target='_blank'>
            {contactStrings.faq.policytext}
          </StyledFaqLink>
        </StyledText>
      </StyledSubContactSectionWrapper>

      <StyledSubContactSectionWrapper2>
        <StyledTitle>{contactStrings.ro.title}</StyledTitle>
        <StyledText>
          {contactStrings.ro.d1}<br/>
          {contactStrings.ro.d2}
          <StyledReachOutLink href={strings.social.emailLink}
                              target="_blank">{contactStrings.ro.email}</StyledReachOutLink>
        </StyledText>
      </StyledSubContactSectionWrapper2>

      <StyledTitle2>{contactStrings.desc}</StyledTitle2>
      <ImageGroup>
        <StyledSocialLink href={strings.social.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={linkedin}
            onMouseOver={e => (e.currentTarget.src = linkedin_hover)}
            onMouseOut={e => (e.currentTarget.src = linkedin)}/>
        </StyledSocialLink>
        <StyledSocialLink href={strings.social.facebook} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={facebook}
            onMouseOver={e => (e.currentTarget.src = facebook_hover)}
            onMouseOut={e => (e.currentTarget.src = facebook)}
          />
        </StyledSocialLink>
        <StyledSocialLink href={strings.social.instagram} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={instagram}
            onMouseOver={e => (e.currentTarget.src = instagram_hover)}
            onMouseOut={e => (e.currentTarget.src = instagram)}/>
        </StyledSocialLink>
        <StyledSocialLink href={strings.social.slack} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={slack}
            onMouseOver={e => (e.currentTarget.src = slack_hover)}
            onMouseOut={e => (e.currentTarget.src = slack)}/>
        </StyledSocialLink>
      </ImageGroup>
    </>;
  }

  render() {
    const {screenWidth} = this.state;

    return (
      <StyledSubSectionWrapper>
        <Grid columns={2}>
          <Grid.Column computer={10} mobile={16}>
            {this.renderContent()}
          </Grid.Column>
          {screenWidth <= 425
            ? <></>
            : <Grid.Column computer={6}>
              <Image src={illustration} size="huge"/>
            </Grid.Column>}
        </Grid>
      </StyledSubSectionWrapper>
    );
  }
}

export default Contact;
