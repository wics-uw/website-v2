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

import fb_logo from "../../res/images/footer_fb_logo.svg";
import github_logo from "../../res/images/footer_github_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import discord_logo from "../../res/images/footer_linkedin_logo.svg";
import strings from "../../res/strings";

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
          <StyledText>{strings.footer.footerText}</StyledText>
          <StyledEmail>{strings.footer.ugradEmail}</StyledEmail>
          <StyledGridLinks columns={4}>
              <StyledColumn>
                <StyledLink
                  href={"https://cs.uwaterloo.ca/wics"}
                  target="_blank">
                  {strings.footer.bigWicsSite}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink
                  href={"http://wics.uwaterloo.ca/"}
                  target="_blank">
                  {strings.footer.oldSite}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink
                  href={"http://wics.uwaterloo.ca/policies/"}
                  target="_blank">
                  {strings.footer.policies}
                </StyledLink>
              </StyledColumn>
              <StyledColumn>
                <StyledLink
                  href={"https://uwaterloo.ca/human-rights-equity-inclusion/indigenousinitiatives/territorial-acknowledgement"}
                  target="_blank">
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
                  href="https://www.linkedin.com/company/waterloo-women-in-computer-science/"
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
