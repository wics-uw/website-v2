import React from 'react';
import {
  StyledChevronDown,
  StyledGridWrapper,
  StyledImageColumn,
  StyledLandingContainer,
  StyledLearnMoreText,
  StyledLearnMoreWrapper,
  StyledMailingButton,
  StyledSchoolName,
  StyledSocialWrapper,
  StyledTextColumn,
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
import {Image} from "semantic-ui-react";
import {StyledSocialLink} from "../../res/globalStyles";
import NavbarLinkItem from "../../components/NavbarLinkItem/NavbarLinkItem";
import ReactGA from 'react-ga';

// Landing page component
function Landing () {

  //Functions to track clicks
  const LearnMoreClickHandler = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked Learn More Button'
    })
  }
  const MailingListClick = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked Mailing List Button'
    })
  }
  const LinkedInClick = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked LinkedIn Icon'
    })
  }
  const FacebookClick = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked Facebook Icon'
    })
  }
  const InstagramClick = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked Instagram Icon'
    })
  }
  const SlackClick = () => {
    ReactGA.event ({
      category: 'Landing',
      action: 'Clicked Slack Icon'
    })
  }

  return (
    <StyledLandingContainer>
      <StyledGridWrapper columns={2} reversed="computer" only="computer">

        {/*Right column - Image*/}
        <StyledImageColumn computer={8} mobile={8} verticalAlign='middle'>
          <Image src={landing}/>
        </StyledImageColumn>

        {/*Left column - Text*/}
        <StyledTextColumn computer={8} mobile={12} verticalAlign='middle'>
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
            <StyledSocialLink href={strings.social.linkedin} target='_blank' rel="noopener noreferrer" onClick={LinkedInClick}>
              <img
                alt=""
                src={linkedin}
                onMouseOver={e => (e.currentTarget.src = linkedin_hover)}
                onMouseOut={e => (e.currentTarget.src = linkedin)}/>
            </StyledSocialLink>
            <StyledSocialLink href={strings.social.facebook} target='_blank' rel="noopener noreferrer" onClick={FacebookClick}>
              <img
                alt=""
                src={facebook}
                onMouseOver={e => (e.currentTarget.src = facebook_hover)}
                onMouseOut={e => (e.currentTarget.src = facebook)}/>
            </StyledSocialLink>
            <StyledSocialLink href={strings.social.instagram} target='_blank' rel="noopener noreferrer" onClick={InstagramClick}>
              <img
                alt=""
                src={instagram}
                onMouseOver={e => (e.currentTarget.src = instagram_hover)}
                onMouseOut={e => (e.currentTarget.src = instagram)}/>
            </StyledSocialLink>
            <StyledSocialLink href={strings.social.slack} target='_blank' rel="noopener noreferrer" onClick={SlackClick}>
              <img
                alt=""
                src={slack}
                onMouseOver={e => (e.currentTarget.src = slack_hover)}
                onMouseOut={e => (e.currentTarget.src = slack)}/>
            </StyledSocialLink>
          </StyledSocialWrapper>
          <StyledMailingButton
            href={landingStrings.mailingLink}
            target='_blank' onClick={MailingListClick}>
            {landingStrings.mailing}
          </StyledMailingButton>
        </StyledTextColumn>
      </StyledGridWrapper>

      {/*Learn more*/}
      <StyledLearnMoreWrapper>
        <NavbarLinkItem to={"about"} offset={-50}>
          <StyledLearnMoreText onClick={LearnMoreClickHandler}>
            {landingStrings.learnMore}
          </StyledLearnMoreText>
          <StyledChevronDown src={chevron_down} onClick={LearnMoreClickHandler}/>
        </NavbarLinkItem>
      </StyledLearnMoreWrapper>
    </StyledLandingContainer>
  )
};

export default Landing;