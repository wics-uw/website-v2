import React, {Component} from "react";
import contactStrings from "../../res/contactStrings";
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
import woman from "../../res/images/woman.png";

import fb_logo from "../../res/images/footer_fb_logo.svg";
import linkedin_logo from "../../res/images/footer_linkedin_logo.svg";
import discord_logo from "../../res/images/footer_linkedin_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import {StyledSectionText, StyledSubSectionWrapper} from "../../res/globalStyles";
import strings from "../../res/strings";

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
                <StyledFaqLink href={contactStrings.faq.faqlink}>
                  {contactStrings.faq.faqtext}
                </StyledFaqLink>
                {contactStrings.faq.d2}
                <StyledFaqLink href={contactStrings.faq.policylink}>
                  {contactStrings.faq.policytext}
                </StyledFaqLink>
              </StyledText>
            </StyledSubContactSectionWrapper>

            <StyledSubContactSectionWrapper2>
              <StyledTitle>{contactStrings.ro.title}</StyledTitle>
              <StyledText>
                {contactStrings.ro.d1}
                {contactStrings.ro.d2}
                <StyledReachOutLink>{contactStrings.ro.email}</StyledReachOutLink>
              </StyledText>
            </StyledSubContactSectionWrapper2>

            <StyledTitle2>{contactStrings.desc}</StyledTitle2>
            <ImageGroup>
              <StyledSocial
                src={linkedin_logo}
                href={contactStrings.social.lin}
                target="_blank"/>
              <StyledSocial
                src={fb_logo}
                href={contactStrings.social.fb}
                target="_blank"/>
              <StyledSocial
                src={insta_logo}
                href={contactStrings.social.insta}
                target="_blank"/>
              <StyledSocial
                src={discord_logo}
                href={contactStrings.social.disc}
                target="_blank"/>
            </ImageGroup>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src={woman} size="huge"/>
          </Grid.Column>
        </Grid>
      </StyledSubSectionWrapper>
    );
  }
}

export default Contact;
