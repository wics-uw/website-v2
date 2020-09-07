import React from 'react';
import {
  StyledChevronDown,
  StyledColumn,
  StyledGridWrapper,
  StyledLandingContainer,
  StyledLearnMoreText,
  StyledLearnMoreWrapper,
  StyledMailingButton,
  StyledSchoolName,
  StyledSocialWrapper,
  StyledUndergrad,
  StyledWics
} from "./styles";
import landingStrings from "../../res/strings/landingStrings";
import landing from "../../res/images/landing.svg";
import facebook from "../../res/images/socials/inactive/facebook-light.svg";
import instagram from "../../res/images/socials/inactive/ig-light.svg";
import linkedin from "../../res/images/socials/inactive/linkedin-light.svg";
import slack from "../../res/images/socials/inactive/slack-light.svg";
import facebook_hover from "../../res/images/socials/hover/facebook-light.svg";
import instagram_hover from "../../res/images/socials/hover/ig-light.svg";
import linkedin_hover from "../../res/images/socials/hover/linkedin-light.svg";
import slack_hover from "../../res/images/socials/hover/slack-light.svg";
import chevron_down from "../../res/images/landing_chevron_down.svg"
import strings from "../../res/strings/strings";
import {GridColumn, Image} from "semantic-ui-react";
import {StyledSocial} from "../../res/globalStyles";

// Landing page component
const Landing = props => {
  const {changeSelection} = props;
  return (
    <StyledLandingContainer>
      <StyledGridWrapper columns={2}>
        {/*Left column - Text*/}
        <StyledColumn computer={8} verticalAlign='middle'>
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
              src={linkedin}
              onMouseOver={e => (e.currentTarget.src = linkedin_hover)}
              onMouseOut={e => (e.currentTarget.src = linkedin)}
              href={strings.social.linkedin}
              target='_blank'/>
            <StyledSocial
              src={facebook}
              onMouseOver={e => (e.currentTarget.src = facebook_hover)}
              onMouseOut={e => (e.currentTarget.src = facebook)}
              href={strings.social.facebook}
              target='_blank'/>
            <StyledSocial
              src={instagram}
              onMouseOver={e => (e.currentTarget.src = instagram_hover)}
              onMouseOut={e => (e.currentTarget.src = instagram)}
              href={strings.social.instagram}
              target='_blank'/>
            <StyledSocial
              src={slack}
              onMouseOver={e => (e.currentTarget.src = slack_hover)}
              onMouseOut={e => (e.currentTarget.src = slack)}
              href={strings.social.slack}
              target='_blank'/>
          </StyledSocialWrapper>
          <StyledMailingButton
            href={landingStrings.mailingLink}
            target='_blank'>
            {landingStrings.mailing}
          </StyledMailingButton>
        </StyledColumn>

        {/*Right column - Image*/}
        <GridColumn computer={8} verticalAlign='middle'>
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