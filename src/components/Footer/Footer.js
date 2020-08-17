import React, { Component } from "react";
import {
  StyledFooterWrapper,
  StyledLogo,
  StyledColumnWrapper,
  StyledRow,
  StyledColumn,
  StyledCopyright,
  StyledEmail,
  StyledText,
} from "./styles";
import fb_logo from "../../res/images/fb_logo.png";
import github_logo from "../../res/images/github_logo.png";
import insta_logo from "../../res/images/insta_logo.png";
import twitter_logo from "../../res/images/twitter_logo.png";

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
              Faculty WiCS Site
              <StyledLogo src={fb_logo} size="tiny" />
            </StyledColumn>
            <StyledColumn>
              Old Website <StyledLogo src={insta_logo} size="tiny" />
            </StyledColumn>
            <StyledColumn>
              Our Policies <StyledLogo src={twitter_logo} size="tiny" />
            </StyledColumn>
            <StyledColumn>
              Land Acknowledgement <StyledLogo src={github_logo} size="tiny" />
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
