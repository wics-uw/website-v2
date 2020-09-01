import React, { Component } from "react";
import {
  StyledFooterWrapper,
  StyledTitle,
  StyledText,
  StyledLink,
  StyledGridSocial,
  StyledSocial,
  StyledColumn,
  StyledCopyright,
} from "./styles-v3";
import { Grid, Container, Image } from "semantic-ui-react";
import footerStrings from "../../res/footerStrings";

import fb_logo from "../../res/images/footer_fb_logo.svg";
import linkedin_logo from "../../res/images/footer_linkedin_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import discord_logo from "../../res/images/footer_discord_logo.svg";
import email from "../../res/images/footer_email.svg";

class FooterV3 extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column width={3} style={{marginRight: "40px"}}>
              {/* width={3}> */}
              <div>
                <StyledTitle>{footerStrings.title.addr}</StyledTitle>
                <ul
                  style={{
                    listStyleType: "none",
                    textAlign: "left",
                    paddingLeft: "0px",
                  }}
                >
                  <li>
                    <StyledText>{footerStrings.description.a1}</StyledText>
                  </li>
                  <li>
                    <StyledText>{footerStrings.description.a2}</StyledText>
                  </li>
                  <li>
                    <StyledText>{footerStrings.description.a3}</StyledText>
                  </li>
                </ul>
                <ul
                  style={{
                    listStyleType: "none",
                    textAlign: "left",
                    paddingLeft: "0px",
                  }}
                >
                  <li>
                    <StyledText style={{ fontStyle: "italic" }}>
                      {footerStrings.description.a4}
                    </StyledText>
                  </li>
                  <li>
                    <StyledText style={{ fontStyle: "italic" }}>
                      {footerStrings.description.a5}
                    </StyledText>
                  </li>
                  <li>
                    <StyledText style={{ fontStyle: "italic" }}>
                      {footerStrings.description.a6}
                    </StyledText>
                  </li>
                  <li>
                    <StyledText style={{ fontStyle: "italic" }}>
                      {footerStrings.description.a7}
                    </StyledText>
                  </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column width={6} style={{marginRight: "40px"}}>
              <StyledTitle>{footerStrings.title.la} </StyledTitle>
              <StyledText>{footerStrings.description.la}</StyledText>
            </Grid.Column>
            <Grid.Column width={3}>
              <StyledTitle>{footerStrings.title.pol}</StyledTitle>
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  paddingLeft: "0px",
                }}
              >
                <li>
                  <StyledLink href={footerStrings.links.p1}>
                    {footerStrings.description.p1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p2}>
                    {footerStrings.description.p2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p3}>
                    {footerStrings.description.p3}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p4}>
                    {footerStrings.description.p4}
                  </StyledLink>
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column width={2}>
              <StyledTitle>{footerStrings.title.lk}</StyledTitle>
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  paddingLeft: "0px",
                }}
              >
                <li>
                  <StyledLink href={footerStrings.links.lk1}>
                    {footerStrings.description.lk1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk2}>
                    {footerStrings.description.lk2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk3}>
                    {footerStrings.description.lk3}
                  </StyledLink>
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <StyledGridSocial columns={5}>
          <StyledColumn>
            <StyledSocial
              src={email}
              href="mailto:wics.uw.ugrad@gmail.com"
              target="_blank"
            />
          </StyledColumn>
          <StyledColumn>
            <StyledSocial
              src={linkedin_logo}
              href={footerStrings.links.social.lin}
              target="_blank"
            />
          </StyledColumn>
          <StyledColumn>
            <StyledSocial
              src={fb_logo}
              href={footerStrings.links.social.fb}
              target="_blank"
            />
          </StyledColumn>
          <StyledColumn>
            <StyledSocial
              src={insta_logo}
              href={footerStrings.links.social.insta}
              target="_blank"
            />
          </StyledColumn>
          <StyledColumn>
            <StyledSocial
              src={discord_logo}
              href={footerStrings.links.social.disc}
              target="_blank"
            />
          </StyledColumn>
        </StyledGridSocial>
        <Grid columns={1}>
          <Grid.Column>
            <StyledCopyright>
              &copy; {footerStrings.copyright} {new Date().getFullYear()}{" "}
            </StyledCopyright>
          </Grid.Column>
        </Grid>
      </StyledFooterWrapper>
    );
  }
}

export default FooterV3;
