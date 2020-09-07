import React, {Component} from "react";
import {
  StyledCopyright,
  StyledFooterContentContainer,
  StyledFooterWrapper,
  StyledLink,
  StyledList,
  StyledSocialContainer,
  StyledText,
  StyledTextGrid,
  StyledTextItalic,
  StyledTitle,
  StyledTitleLink,
} from "./styles";
import {GridColumn, ImageGroup} from "semantic-ui-react";
import footerStrings from "../../res/strings/footerStrings";

import linkedin from "../../res/images/socials/inactive/linkedin-dark.svg";
import facebook from "../../res/images/socials/inactive/facebook-dark.svg";
import slack from "../../res/images/socials/inactive/slack-dark.svg";
import instagram from "../../res/images/socials/inactive/ig-dark.svg";
import email from "../../res/images/socials/inactive/email-dark.svg";
import linkedin_hover from "../../res/images/socials/hover/linkedin-dark.svg";
import facebook_hover from "../../res/images/socials/hover/facebook-dark.svg";
import slack_hover from "../../res/images/socials/hover/slack-dark.svg";
import instagram_hover from "../../res/images/socials/hover/ig-dark.svg";
import email_hover from "../../res/images/socials/hover/email-dark.svg";
import strings from "../../res/strings/strings";
import {StyledSocial} from "../../res/globalStyles";

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <StyledFooterContentContainer>
          <StyledTextGrid stackable>
            {/*Address*/}
            <GridColumn width={4}>
              <StyledTitle>{footerStrings.title.addr}</StyledTitle>
              <StyledList>
                <li>
                  <StyledText>{footerStrings.description.a1}</StyledText>
                </li>
                <li>
                  <StyledText>{footerStrings.description.a2}</StyledText>
                </li>
                <li>
                  <StyledText>{footerStrings.description.a3}</StyledText>
                </li>
              </StyledList>
              <StyledList>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a4}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a5}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a6}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a7}
                  </StyledTextItalic>
                </li>
              </StyledList>
            </GridColumn>

            {/*Land Acknowledgement*/}
            <GridColumn width={6}>
              <StyledTitle>
                <StyledTitleLink href={footerStrings.links.pol} target='_blank'>
                  {footerStrings.title.la}
                </StyledTitleLink>
              </StyledTitle>
              <StyledText>{footerStrings.description.la}</StyledText>
            </GridColumn>

            {/*Our Policies*/}
            <GridColumn width={3}>
              <StyledTitle>
                <StyledTitleLink href={footerStrings.links.pol} target='_blank'>
                  {footerStrings.title.pol}
                </StyledTitleLink>
              </StyledTitle>
              <StyledList>
                <li>
                  <StyledLink href={footerStrings.links.p1} target='_blank'>
                    {footerStrings.description.p1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p2} target='_blank'>
                    {footerStrings.description.p2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p3} target='_blank'>
                    {footerStrings.description.p3}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p4} target='_blank'>
                    {footerStrings.description.p4}
                  </StyledLink>
                </li>
              </StyledList>
            </GridColumn>

            {/*Relevant links*/}
            <GridColumn width={3}>
              <StyledTitle>{footerStrings.title.lk}</StyledTitle>
              <StyledList>
                <li>
                  <StyledLink href={footerStrings.links.lk1} target='_blank'>
                    {footerStrings.description.lk1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk2} target='_blank'>
                    {footerStrings.description.lk2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk3} target='_blank'>
                    {footerStrings.description.lk3}
                  </StyledLink>
                </li>
              </StyledList>
            </GridColumn>
          </StyledTextGrid>

          <StyledSocialContainer>
            <ImageGroup>
              <StyledSocial
                src={linkedin}
                onMouseOver={e => (e.currentTarget.src = linkedin_hover)}
                onMouseOut={e => (e.currentTarget.src = linkedin)}
                href={strings.social.linkedin}
                target="_blank"
              />
              <StyledSocial
                src={facebook}
                onMouseOver={e => (e.currentTarget.src = facebook_hover)}
                onMouseOut={e => (e.currentTarget.src = facebook)}
                href={strings.social.facebook}
                target="_blank"
              />
              <StyledSocial
                src={instagram}
                onMouseOver={e => (e.currentTarget.src = instagram_hover)}
                onMouseOut={e => (e.currentTarget.src = instagram)}
                href={strings.social.instagram}
                target="_blank"
              />
              <StyledSocial
                src={slack}
                onMouseOver={e => (e.currentTarget.src = slack_hover)}
                onMouseOut={e => (e.currentTarget.src = slack)}
                href={strings.social.slack}
                target="_blank"
              />
              <StyledSocial
                src={email}
                onMouseOver={e => (e.currentTarget.src = email_hover)}
                onMouseOut={e => (e.currentTarget.src = email)}
                href={strings.social.email}
                target="_blank"
              />
            </ImageGroup>
          </StyledSocialContainer>

          <StyledCopyright>
            &copy; {footerStrings.copyright} {new Date().getFullYear()}
          </StyledCopyright>
        </StyledFooterContentContainer>
      </StyledFooterWrapper>
    );
  }
}

export default Footer;
