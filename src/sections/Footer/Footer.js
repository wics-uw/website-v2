import React, { Component } from "react";
import { GridColumn, Grid, ImageGroup } from "semantic-ui-react";
import FooterItem from "./FooterItem/FooterItem";
import {
  StyledFooterWrapper,
  StyledCopyright,
  StyledEmail,
  StyledText,
  StyledSocial,
  StyledLink,
} from "./styles";

import fb_logo from "../../res/images/fb_logo.png";
import github_logo from "../../res/images/github_logo.png";
import insta_logo from "../../res/images/insta_logo.png";
import discord_logo from "../../res/images/discord_logo.png";
import strings from "../../res/strings";

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <StyledText>{strings.footer.footerText}</StyledText>
        <StyledEmail>{strings.footer.ugradEmail}</StyledEmail>
        <Grid columns="four">
          <Grid.Row>
            <Grid.Column>
              <StyledLink href={"https://cs.uwaterloo.ca/wics"}>
                {strings.footer.bigWicsSite}
              </StyledLink>
            </Grid.Column>
            <Grid.Column>
              <StyledLink href={"http://wics.uwaterloo.ca/"}>
                {strings.footer.oldSite}
              </StyledLink>
            </Grid.Column>
            <Grid.Column>
              <StyledLink href={"http://wics.uwaterloo.ca/policies/"}>
                {strings.footer.policies}
              </StyledLink>
            </Grid.Column>
            <Grid.Column>
              <StyledLink
                href={
                  "https://cs.uwaterloo.ca/sites/ca.computer-science/files/uploads/files/report_-_wics_task_force.pdf"
                }
              >
                {strings.footer.landAcknowledgement}
              </StyledLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <StyledSocial
                src={fb_logo}
                href="https://www.facebook.com/uwaterloowics"
                target="_blank"
              />
            </Grid.Column>
            <Grid.Column>
              {" "}
              <StyledSocial
                src={github_logo}
                href="https://github.com/wics-uw"
                target="_blank"
              />
            </Grid.Column>
            <Grid.Column>
              {" "}
              <StyledSocial
                src={insta_logo}
                href="https://www.instagram.com/uwaterloowics/?hl=en"
                target="_blank"
              />
            </Grid.Column>
            <Grid.Column>
              {" "}
              <StyledSocial
                src={discord_logo}
                href="https://discord.com/invite/f76G6AW"
                target="_blank"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <StyledCopyright>
          &copy; WATERLOO WOMEN IN COMPUTER SCIENCE {new Date().getFullYear()}{" "}
        </StyledCopyright>
      </StyledFooterWrapper>
    );
  }
}
export default Footer;
