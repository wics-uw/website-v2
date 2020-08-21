import React, {Component} from "react";
import {
  StyledColumn,
  StyledCopyright,
  StyledEmail,
  StyledFooterWrapper,
  StyledGridLinks,
  StyledGridSocial,
  StyledLink,
  StyledSocial,
  StyledText,
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
          <StyledGridLinks columns={4}>
              <StyledColumn>
                <StyledLink href={"https://cs.uwaterloo.ca/wics"}>
                  {strings.footer.bigWicsSite}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink href={"http://wics.uwaterloo.ca/"}>
                  {strings.footer.oldSite}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink href={"http://wics.uwaterloo.ca/policies/"}>
                  {strings.footer.policies}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink href={"https://uwaterloo.ca/human-rights-equity-inclusion/indigenousinitiatives/territorial-acknowledgement"}>
                  {strings.footer.landAcknowledgement}
                </StyledLink>
              </StyledColumn>
          </StyledGridLinks>

          <StyledGridSocial columns={4}>
              <StyledColumn>
                <StyledSocial
                  src={fb_logo}
                  href="https://www.facebook.com/uwaterloowics"
                  target="_blank"
                />
              </StyledColumn>
              <StyledColumn>
                <StyledSocial
                  src={insta_logo}
                  href="https://www.instagram.com/uwaterloowics/?hl=en"
                  target="_blank"
                />
              </StyledColumn>
              <StyledColumn>
                <StyledSocial
                  src={discord_logo}
                  href="https://discord.com/invite/f76G6AW"
                  target="_blank"
                />
              </StyledColumn>
              <StyledColumn>
                <StyledSocial
                  src={github_logo}
                  href="https://github.com/wics-uw"
                  target="_blank"
                />
              </StyledColumn>
          </StyledGridSocial>
          <StyledCopyright>
            &copy; {strings.footer.copyright} {new Date().getFullYear()}{" "}
          </StyledCopyright>
      </StyledFooterWrapper>
    );
  }
}
export default Footer;
