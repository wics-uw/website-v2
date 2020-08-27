import React, { Component } from "react";
import contactStrings from "../../res/contactStrings";
import { Grid, Image } from "semantic-ui-react";
import {
  StyledSocial,
  StyledColumn,
  StyledGridSocial,
  StyledTitle2,
  StyledText,
  StyledTitle,
} from "./styles";
import woman from "../../res/images/woman.png";

import fb_logo from "../../res/images/footer_fb_logo.svg";
import linkedin_logo from "../../res/images/footer_linkedin_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import discord_logo from "../../res/images/footer_linkedin_logo.svg";

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={9}>
            <StyledTitle>{contactStrings.faq.title}</StyledTitle>
            <div>
              <StyledText>
                {contactStrings.faq.d1}
                <a
                  href={contactStrings.faq.faqlink}
                  style={{ textDecorationLine: "underline", color: "#000000" }}
                >
                  {contactStrings.faq.faqtext}
                </a>
                {contactStrings.faq.d2}
                <a
                  href={contactStrings.faq.policylink}
                  style={{ textDecorationLine: "underline", color: "#000000" }}
                >
                  {contactStrings.faq.policytext}
                </a>
              </StyledText>
              <StyledTitle>{contactStrings.ro.title}</StyledTitle>
              <StyledText>
                {contactStrings.ro.d1}
                <a style={{ fontWeight: "bold", color: "#000000" }}>
                  {contactStrings.ro.email}
                </a>
              </StyledText>
              <StyledTitle2>{contactStrings.desc}</StyledTitle2>
              <StyledGridSocial columns={4}>
                <StyledColumn>
                  <StyledSocial
                    src={linkedin_logo}
                    href={contactStrings.social.lin}
                    target="_blank"
                  />
                </StyledColumn>
                <StyledColumn>
                  <StyledSocial
                    src={fb_logo}
                    href={contactStrings.social.fb}
                    target="_blank"
                  />
                </StyledColumn>
                <StyledColumn>
                  <StyledSocial
                    src={insta_logo}
                    href={contactStrings.social.insta}
                    target="_blank"
                  />
                </StyledColumn>
                <StyledColumn>
                  <StyledSocial
                    src={discord_logo}
                    href={contactStrings.social.disc}
                    target="_blank"
                  />
                </StyledColumn>
              </StyledGridSocial>
            </div>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={4}>
            <Image src={woman} size="huge" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Contact;
