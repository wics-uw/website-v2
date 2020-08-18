import React, { Component } from "react";
import {
  StyledFooterWrapper,
  StyledLogo,
  StyledColumnWrapper,
  StyledRow,
  StyledCopyright,
  StyledEmail,
  StyledText,
  MenuLink,
  StyledColumn,
} from "./styles";
import fb_logo from "../../res/images/fb_logo.png";
import github_logo from "../../res/images/github_logo.png";
import insta_logo from "../../res/images/insta_logo.png";
import discord_logo from "../../res/images/discord_logo.png";

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <StyledText>
          Please feel free to reach out if you have any questions or feedback!
        </StyledText>
        <StyledEmail>wics-ugrad@lists.uwaterloo.ca</StyledEmail>
        <StyledColumnWrapper>
          <StyledRow>
            <StyledColumn>
              <MenuLink href="https://cs.uwaterloo.ca/wics">
                Faculty WiCS Site
              </MenuLink>
              <MenuLink href="https://www.facebook.com/uwaterloowics/">
                <StyledLogo src={fb_logo} size="tiny"></StyledLogo>
              </MenuLink>
            </StyledColumn>
            <StyledColumn>
              <MenuLink href="http://wics.uwaterloo.ca/">Old Website</MenuLink>
              <MenuLink href="https://www.instagram.com/uwaterloowics/?hl=en">
                <StyledLogo src={insta_logo} size="tiny" />
              </MenuLink>
            </StyledColumn>
            <StyledColumn>
              <MenuLink href="http://wics.uwaterloo.ca/policies/">
                Our Policies
              </MenuLink>
              <MenuLink href="https://discord.com/invite/f76G6AW">
                <StyledLogo src={discord_logo} size="tiny" />
              </MenuLink>
            </StyledColumn>
            <StyledColumn>
              <MenuLink href="https://cs.uwaterloo.ca/sites/ca.computer-science/files/uploads/files/report_-_wics_task_force.pdf">
                WiCS Task Force Report
              </MenuLink>
              <MenuLink href="https://github.com/wics-uw">
                <StyledLogo src={github_logo} size="tiny" />
              </MenuLink>
            </StyledColumn>
          </StyledRow>
        </StyledColumnWrapper>
        <StyledCopyright>
          &copy; WATERLOO WOMEN IN COMPUTER SCIENCE {new Date().getFullYear()}{" "}
        </StyledCopyright>
      </StyledFooterWrapper>
    );
  }
}
export default Footer;
