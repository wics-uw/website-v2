import React, {Component} from 'react';
import {
  StyledChevronDown,
  StyledGridLeftColumn,
  StyledGridRightColumn,
  StyledGridWrapper,
  StyledLandingImage, StyledLandingWrapper,
  StyledLearnMoreText,
  StyledLearnMoreWrapper,
  StyledMailingButton,
  StyledSchoolName,
  StyledSocial,
  StyledSocialWrapper,
  StyledUndergrad,
  StyledWics
} from "./styles";
import landingStrings from "../../res/strings/landingStrings";
import placeholder from "../../res/images/landing_placeholder.svg";
import facebook from "../../res/images/landing_fb_logo.svg";
import instagram from "../../res/images/landing_insta_logo.svg";
import linkedin from "../../res/images/landing_linkedin_logo.svg";
import chevron_down from "../../res/images/landing_chevron_down.svg"
import strings from "../../res/strings/strings";

// Landing page component
class Landing extends Component {
  render() {
    return (
      <StyledLandingWrapper>
        <StyledGridWrapper columns={2}>
          {/*Left column - Text*/}
          <StyledGridLeftColumn width={8} verticalAlign='middle'>
            <StyledSchoolName>
              {landingStrings.uwaterloo}
            </StyledSchoolName>
            <StyledWics>
              {landingStrings.wics}
            </StyledWics>
            <StyledUndergrad>
              {landingStrings.undergrad}
            </StyledUndergrad>
            <StyledSocialWrapper>
              <StyledSocial
                src={facebook}
                href={strings.social.facebook}
                target='_blank'/>
              <StyledSocial
                src={instagram}
                href={strings.social.instagram}
                target='_blank'/>
              <StyledSocial
                src={linkedin}
                href={strings.social.linkedin}
                target='_blank'/>
            </StyledSocialWrapper>
            <StyledMailingButton
              href={landingStrings.mailingLink}
              target='_blank'>
              {landingStrings.mailing}
            </StyledMailingButton>
          </StyledGridLeftColumn>

          {/*Right column - Image*/}
          <StyledGridRightColumn width={8} verticalAlign='middle'>
            <StyledLandingImage src={placeholder}/>
          </StyledGridRightColumn>
        </StyledGridWrapper>

        {/*Learn more*/}
        <StyledLearnMoreWrapper>
          <StyledLearnMoreText>
            {landingStrings.learnMore}
          </StyledLearnMoreText>
          <StyledChevronDown src={chevron_down}/>
        </StyledLearnMoreWrapper>
      </StyledLandingWrapper>
    )
  }
}

export default Landing;