import React, {Component} from 'react';
import {
  StyledChevronDown,
  StyledGridLeftColumn,
  StyledGridRightColumn,
  StyledGridWrapper,
  StyledLandingImage,
  StyledLearnMoreText,
  StyledLearnMoreWrapper,
  StyledMailingButton,
  StyledSchoolName,
  StyledSocial,
  StyledSocialWrapper,
  StyledUndergrad,
  StyledWics
} from "./styles";
import strings from "../../res/strings";
import placeholder from "../../res/images/placeholder.svg";
import facebook from "../../res/images/fb.svg";
import instagram from "../../res/images/ig.svg";
import linkedin from "../../res/images/linkedin.svg";
import chevron_down from "../../res/images/chevron_down.svg"

// Landing page component
class Landing extends Component {
  render() {
    return (
      <div>
        <StyledGridWrapper columns={2}>
          {/*Left column - Text*/}
          <StyledGridLeftColumn width={8} verticalAlign='middle'>
            <StyledSchoolName>
              {strings.landing.uwaterloo}
            </StyledSchoolName>
            <StyledWics>
              {strings.landing.wics}
            </StyledWics>
            <StyledUndergrad>
              {strings.landing.undergrad}
            </StyledUndergrad>
            <StyledSocialWrapper>
              <StyledSocial
                src={facebook}
                href='https://www.facebook.com/uwaterloowics'
                target='_blank'/>
              <StyledSocial
                src={instagram}
                href='https://www.instagram.com/uwaterloowics/'
                target='_blank'/>
              <StyledSocial
                src={linkedin}
                href='https://www.linkedin.com/company/waterloo-women-in-computer-science/'
                target='_blank'/>
            </StyledSocialWrapper>
            <StyledMailingButton
              href='https://lists.uwaterloo.ca/mailman/listinfo/wics-ugrad?fbclid=IwAR2JUJ4pF6b9E2F-U3gjlY3i7J232x5yQcS50skYtYI6Qafk1CjSUUMxrOE'
              target='_blank'>
              {strings.landing.mailing}
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
            {strings.landing.learnMore}
          </StyledLearnMoreText>
          <StyledChevronDown src={chevron_down}/>
        </StyledLearnMoreWrapper>
      </div>
    )
  }
}

export default Landing;