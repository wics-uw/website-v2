import React, {Component} from 'react';
import {
  StyledChevronDown,
  StyledColumn,
  StyledGridWrapper,
  StyledLandingContainer,
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
import landing from "../../res/images/landing.svg";
import facebook from "../../res/images/landing_fb_logo.svg";
import instagram from "../../res/images/landing_insta_logo.svg";
import linkedin from "../../res/images/landing_linkedin_logo.svg";
import chevron_down from "../../res/images/landing_chevron_down.svg"
import strings from "../../res/strings/strings";
import {GridColumn, Image} from "semantic-ui-react";

// Landing page component
const Landing = props => {
  const {changeSelection} = props;
  return (
    <StyledLandingContainer>
      <StyledGridWrapper columns={2}>
        {/*Left column - Text*/}
        <StyledColumn width={8} verticalAlign='middle'>
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
        </StyledColumn>

        {/*Right column - Image*/}
        <GridColumn width={8} verticalAlign='middle'>
          <Image src={landing}/>
        </GridColumn>
      </StyledGridWrapper>

      {/*Learn more*/}
      <StyledLearnMoreWrapper onClick={() => changeSelection(1)}>
        <StyledLearnMoreText>
          {landingStrings.learnMore}
        </StyledLearnMoreText>
        <StyledChevronDown src={chevron_down}/>
      </StyledLearnMoreWrapper>
    </StyledLandingContainer>
  )
};

export default Landing;