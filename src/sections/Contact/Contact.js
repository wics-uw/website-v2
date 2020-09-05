import React, {Component} from "react";
import contactStrings from "../../res/strings/contactStrings";
import {Grid, Image, ImageGroup} from "semantic-ui-react";
import {
  StyledFaqLink,
  StyledReachOutLink,
  StyledSocial,
  StyledSubContactSectionWrapper,
  StyledSubContactSectionWrapper2,
  StyledText,
  StyledTitle,
  StyledTitle2,
} from "./styles";
import illustration from "../../res/images/contact_us_section.svg";

import fb_logo from "../../res/images/footer_fb_logo.svg";
import linkedin_logo from "../../res/images/footer_linkedin_logo.svg";
import discord_logo from "../../res/images/footer_linkedin_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import {StyledSectionText, StyledSubSectionWrapper} from "../../res/globalStyles";
import strings from "../../res/strings/strings";

class Contact extends Component {
  render() {
    return (
      <StyledSubSectionWrapper>
        <Grid columns={2}>
          <Grid.Column width={10}>
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
                <StyledReachOutLink href={"mailto:" + contactStrings.ro.email}
                                    target="_blank">{contactStrings.ro.email}</StyledReachOutLink>
              </StyledText>
            </StyledSubContactSectionWrapper2>

            <StyledTitle2>{contactStrings.desc}</StyledTitle2>
            <ImageGroup>
              <StyledSocial
                src={linkedin_logo}
                href={strings.social.linkedin}
                target="_blank"/>
              <StyledSocial
                src={fb_logo}
                href={strings.social.facebook}
                target="_blank"/>
              <StyledSocial
                src={insta_logo}
                href={strings.social.instagram}
                target="_blank"/>
              <StyledSocial
                src={discord_logo}
                href={strings.social.discord}
                target="_blank"/>
            </ImageGroup>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src={illustration} size="huge"/>
          </Grid.Column>
        </Grid>
      </StyledSubSectionWrapper>
    );
  }
}

export default Contact;
